#!/usr/bin/env python3
"""
Extract TFT Set 16 unit splash images + trait icons from an HTML file.

Rules:
- Unit splash images:
  - Take from: img.NewSetUnitSplashImg
  - Save as PNG with name: "TFT16_{unit_name}.TFT_Set16.png"
- Trait icons:
  - Take from: img.TraitIcon.NewSetTraitIcon inside the unit card
  - Save as PNG with name: "{trait_name}.png"
  - Deduplicate: download each trait only once per run

Usage:
  python download_assets.py path/to/page.html --out ./assets
"""

import argparse
import io
import os
import re
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup
from PIL import Image


# ---------- helpers ----------

def clean_name_keep_case(s: str) -> str:
    """
    For unit filenames: keep original casing but remove non-alphanumerics.
    "Aurelion Sol" -> "AurelionSol"
    "Kha'Zix" -> "KhaZix"
    """
    s = (s or "").strip()
    return re.sub(r"[^A-Za-z0-9]+", "", s)


def slug_lower(s: str) -> str:
    """
    For trait filenames: lowercased, remove non-alphanumerics.
    "Star Forger" -> "starforger"
    "Targon" -> "targon"
    """
    s = (s or "").strip().lower()
    return re.sub(r"[^a-z0-9]+", "", s)


def url_basename(url: str) -> str:
    path = urlparse(url).path
    base = os.path.basename(path)
    return base or ""


def download_bytes(url: str, timeout: int = 30) -> bytes:
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; TFTAssetDownloader/1.0)"
    }
    r = requests.get(url, headers=headers, timeout=timeout)
    r.raise_for_status()
    return r.content


def save_as_png(image_bytes: bytes, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)

    # Convert whatever we got (jpg/webp/png) into PNG
    with Image.open(io.BytesIO(image_bytes)) as im:
        # Some CDNs return palette/alpha combos; normalize to RGBA
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA")
        elif im.mode == "RGB":
            # Keep RGB unless you want consistent alpha channel
            pass
        im.save(out_path, format="PNG", optimize=True)


# ---------- main extraction ----------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--html_file", default="champs.html",help="HTML file containing the unit array")
    ap.add_argument("--out", default="./downloaded", help="Output directory")
    ap.add_argument("--units-dir", default="units", help="Subdir for unit images")
    ap.add_argument("--traits-dir", default="traits", help="Subdir for trait icons")
    ap.add_argument("--limit", type=int, default=0, help="Optional limit for debugging (0 = no limit)")
    args = ap.parse_args()

    html_path = Path(args.html_file)
    out_root = Path(args.out)
    out_units = out_root / args.units_dir
    out_traits = out_root / args.traits_dir

    soup = BeautifulSoup(html_path.read_text(encoding="utf-8"), "html.parser")

    container = soup.select_one(".NewSetSectionUnitArrayContainer")
    if not container:
        raise SystemExit("Could not find .NewSetSectionUnitArrayContainer in the HTML")

    cards = container.select(".NewSetUnitContainer")
    if not cards:
        raise SystemExit("Found container, but no .NewSetUnitContainer elements inside")

    seen_traits = set()
    unit_count = 0
    trait_count = 0

    for card in cards:
        if args.limit and unit_count >= args.limit:
            break

        # ---- unit splash ----
        splash = card.select_one("img.NewSetUnitSplashImg[src]")
        if splash:
            unit_display_name = splash.get("alt") or ""
            unit_token = clean_name_keep_case(unit_display_name)
            if unit_token:
                unit_url = splash["src"]
                unit_filename = f"TFT16_{unit_token}.TFT_Set16.png"
                unit_path = out_units / unit_filename

                if not unit_path.exists():
                    try:
                        b = download_bytes(unit_url)
                        save_as_png(b, unit_path)
                        print(f"[unit] saved {unit_filename}")
                    except Exception as e:
                        print(f"[unit] FAILED {unit_display_name} -> {unit_url}: {e}")
                else:
                    print(f"[unit] skip existing {unit_filename}")

        unit_count += 1

        # ---- traits ----
        # Trait icons appear below name. We only want the TFT trait icons, not unlock/gold/mana/etc.
        # In your snippet: img.TraitIcon.NewSetTraitIcon
        for timg in card.select("img.TraitIcon.NewSetTraitIcon[src][alt]"):
            trait_name = timg.get("alt") or ""
            trait_id = slug_lower(trait_name)
            if not trait_id:
                continue
            if trait_id in seen_traits:
                continue

            seen_traits.add(trait_id)

            trait_url = timg["src"]

            # Prefer filename from URL if it ends with .png (ex: targon.png). Otherwise use the alt.
            base = url_basename(trait_url).lower()
            if base.endswith(".png") and base != "unlock.png":
                trait_filename = base
            else:
                trait_filename = f"{trait_id}.png"

            trait_path = out_traits / trait_filename

            if trait_path.exists():
                print(f"[trait] skip existing {trait_filename}")
                continue

            try:
                b = download_bytes(trait_url)
                # Even if it's already png, this guarantees png output and fixes "format=auto" cases.
                save_as_png(b, trait_path)
                trait_count += 1
                print(f"[trait] saved {trait_filename}")
            except Exception as e:
                print(f"[trait] FAILED {trait_name} -> {trait_url}: {e}")

    print("\nDone.")
    print(f"Units processed: {unit_count}")
    print(f"Unique traits downloaded: {trait_count}")
    print(f"Output: {out_root.resolve()}")


if __name__ == "__main__":
    main()
