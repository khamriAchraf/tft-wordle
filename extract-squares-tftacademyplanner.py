#!/usr/bin/env python3
"""
Download TFT unit icons (WEBP) from an HTML file.

HTML pattern (example):
<img class="TFTItem ..." src="https://.../TFT16_Anivia.webp" alt="TFT16_Anivia" ...>

Rules:
- Only download the .webp image (do NOT convert)
- Save as: "TFT16_{unit_name}.TFT_Set16.webp"
  - unit_name comes from alt (preferred) or src basename
  - Example alt "TFT16_Anivia" -> unit_name "Anivia"

Usage:
  python download_unit_webp.py path/to/page.html --out ./units_webp
"""

import argparse
import os
import re
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup


def extract_unit_name(alt: str, src: str) -> str:
    """
    Returns cleaned unit token with original casing:
      "TFT16_Anivia" -> "Anivia"
      "Anivia" -> "Anivia"
    Fallback to src basename if alt missing.
    """
    alt = (alt or "").strip()

    if alt:
        # remove leading "TFT16_" if present
        alt = re.sub(r"^TFT16_", "", alt, flags=re.IGNORECASE)
        # keep alnum only, keep case
        alt = re.sub(r"[^A-Za-z0-9]+", "", alt)
        if alt:
            return alt

    # fallback: parse from src basename "TFT16_Anivia.webp"
    base = os.path.basename(urlparse(src).path)
    base = re.sub(r"\.webp$", "", base, flags=re.IGNORECASE)
    base = re.sub(r"^TFT16_", "", base, flags=re.IGNORECASE)
    base = re.sub(r"[^A-Za-z0-9]+", "", base)
    return base


def download_file(url: str, out_path: Path, timeout: int = 30) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    headers = {"User-Agent": "Mozilla/5.0 (compatible; TFTWebPDownloader/1.0)"}

    with requests.get(url, headers=headers, stream=True, timeout=timeout) as r:
        r.raise_for_status()
        with open(out_path, "wb") as f:
            for chunk in r.iter_content(chunk_size=1024 * 64):
                if chunk:
                    f.write(chunk)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--html_file", default="squares.html", help="HTML file to parse")
    ap.add_argument("--out", default="./downloaded/squares", help="Output directory")
    ap.add_argument("--limit", type=int, default=0, help="Optional limit for debugging (0 = no limit)")
    args = ap.parse_args()

    html_path = Path(args.html_file)
    out_dir = Path(args.out)

    soup = BeautifulSoup(html_path.read_text(encoding="utf-8"), "html.parser")

    # Grab all images that match the pattern.
    # We filter by class containing "TFTItem" and src ending in .webp
    imgs = soup.select('img.TFTItem[src$=".webp"], img.TFTItem[src$=".WEBP"]')
    if not imgs:
        # fallback: class may be present among multiple classes
        imgs = [img for img in soup.find_all("img") if "TFTItem" in (img.get("class") or []) and (img.get("src") or "").lower().endswith(".webp")]

    if not imgs:
        raise SystemExit("No matching img.TFTItem with .webp src found in the HTML.")

    seen = set()
    saved = 0

    for img in imgs:
        if args.limit and saved >= args.limit:
            break

        src = img.get("src") or ""
        if not src.lower().endswith(".webp"):
            continue

        unit_name = extract_unit_name(img.get("alt"), src)
        if not unit_name:
            continue

        # Deduplicate by final id
        key = unit_name.lower()
        if key in seen:
            continue
        seen.add(key)

        filename = f"TFT16_{unit_name}.TFT_Set16.webp"
        out_path = out_dir / filename

        if out_path.exists():
            print(f"[skip] {filename}")
            continue

        try:
            download_file(src, out_path)
            saved += 1
            print(f"[saved] {filename}")
        except Exception as e:
            print(f"[FAIL] {unit_name} -> {src}: {e}")

    print("\nDone.")
    print(f"Found: {len(imgs)} webp images")
    print(f"Saved: {saved}")
    print(f"Output: {out_dir.resolve()}")


if __name__ == "__main__":
    main()
