/**
 * A pool of target compositions for the game to choose from.
 * Each composition includes:
 *  - id:       unique string key
 *  - name:     human-readable label
 *  - units:    array of unit IDs (must match your units.js ids)
 */
const compositions = [
  {
    id: "azir-tibbers-annie-renekton-shyvana-seraphine-swain-neeko-vi",
    name: "ARCANIST AZIR",
    units: [
      "azir",
      "tibbers",
      "annie",
      "renekton",
      "shyvana",
      "seraphine",
      "swain",
      "neeko",
      "vi"
    ]
  },
  {
    id: "yunara-wukong-sett-kindred-fiddlesticks-luciansenna-taric-jhin-shen",
    name: "IONIA YUNARA WUKONG",
    units: [
      "yunara",
      "wukong",
      "sett",
      "kindred",
      "fiddlesticks",
      "luciansenna",
      "taric",
      "jhin",
      "shen"
    ]
  },
  {
    id: "tryndamere-ashe-sejuani-neeko-kindred-swain-draven-briar",
    name: "QUICKSTRIKER TRYNDAMERE",
    units: [
      "tryndamere",
      "ashe",
      "sejuani",
      "neeko",
      "kindred",
      "swain",
      "draven",
      "briar"
    ]
  },
  {
    id: "kindred-skarner-luciansenna-fiddlesticks-shyvana-ambessa-swain-taric-draven",
    name: "QUICKSTRIKER KINDRED",
    units: [
      "kindred",
      "skarner",
      "luciansenna",
      "fiddlesticks",
      "shyvana",
      "ambessa",
      "swain",
      "taric",
      "draven"
    ]
  },
  {
    id: "missfortune-tahmkench-nautilus-luciansenna-fiddlesticks-ornn-shyvana-taric-wukong",
    name: "BILGEWATER MISS FORTUNE TAHM KENCH",
    units: [
      "missfortune",
      "tahmkench",
      "nautilus",
      "luciansenna",
      "fiddlesticks",
      "ornn",
      "shyvana",
      "taric",
      "wukong"
    ]
  },
  {
    id: "veigar-kennen-fizz-kobukoyuumi-poppy-teemo-lulu-rumble",
    name: "YORDLE VEIGAR",
    units: [
      "veigar",
      "kennen",
      "fizz",
      "kobukoyuumi",
      "poppy",
      "teemo",
      "lulu",
      "rumble"
    ]
  },
  {
    id: "yunara-wukong-ryze-lissandra-taric-kennen-kobukoyuumi-sejuani-ashe",
    name: "QUICKSTRIKER YUNARA",
    units: [
      "yunara",
      "wukong",
      "ryze",
      "lissandra",
      "taric",
      "kennen",
      "kobukoyuumi",
      "sejuani",
      "ashe"
    ]
  },
  {
    id: "vayne-garen-lux-kaisa-galio-swain-poppy-xinzhao-jarvaniv",
    name: "DEMACIA VAYNE",
    units: [
      "vayne",
      "garen",
      "lux",
      "kaisa",
      "galio",
      "swain",
      "poppy",
      "xinzhao",
      "jarvaniv"
    ]
  },
  {
    id: "thex-seraphine-loris-luciansenna-braum-taric-orianna-vi-caitlyn",
    name: "PILTOVER T-HEX SERAPHINE",
    units: [
      "thex",
      "seraphine",
      "loris",
      "luciansenna",
      "braum",
      "taric",
      "orianna",
      "vi",
      "caitlyn"
    ]
  },
  {
    id: "diana-taric-seraphine-swain-azir-shyvana-renekton-neeko-vi",
    name: "TARGON DIANA  TARIC",
    units: [
      "diana",
      "taric",
      "seraphine",
      "swain",
      "azir",
      "shyvana",
      "renekton",
      "neeko",
      "vi"
    ]
  },
  {
    id: "lux-garen-galio-swain-ornn-zilean-poppy-xinzhao-jarvaniv-sona",
    name: "DEMACIA LUX",
    units: [
      "lux",
      "garen",
      "galio",
      "swain",
      "ornn",
      "zilean",
      "poppy",
      "xinzhao",
      "jarvaniv",
      "sona"
    ]
  },
  {
    id: "kalista-thresh-braum-fiddlesticks-kindred-ornn-gwen-yorick-viego",
    name: "SHADOW ISLES KALISTA",
    units: [
      "kalista",
      "thresh",
      "braum",
      "fiddlesticks",
      "kindred",
      "ornn",
      "gwen",
      "yorick",
      "viego"
    ]
  },
  {
    id: "sion-bard-aphelios-wukong-volibear-kobukoyuumi-illaoi-shen",
    name: "BRUISER SION",
    units: [
      "sion",
      "bard",
      "aphelios",
      "wukong",
      "volibear",
      "kobukoyuumi",
      "illaoi",
      "shen"
    ]
  },
  {
    id: "thex-jarvaniv-seraphine-luciansenna-ornn-loris-orianna-vi-caitlyn",
    name: "PILTOVER T-HEX JARVAN IV",
    units: [
      "thex",
      "jarvaniv",
      "seraphine",
      "luciansenna",
      "ornn",
      "loris",
      "orianna",
      "vi",
      "caitlyn"
    ]
  },
  {
    id: "diana-swain-seraphine-azir-shyvana-renekton-taric-neeko-vi",
    name: "ARCANIST SWAIN",
    units: [
      "diana",
      "swain",
      "seraphine",
      "azir",
      "shyvana",
      "renekton",
      "taric",
      "neeko",
      "vi"
    ]
  },
  {
    id: "thex-loris-seraphine-braum-luciansenna-ornn-orianna-vi-caitlyn",
    name: "PILTOVER T-HEX",
    units: [
      "thex",
      "loris",
      "seraphine",
      "braum",
      "luciansenna",
      "ornn",
      "orianna",
      "vi",
      "caitlyn"
    ]
  },
  {
    id: "yunara-yasuo-wukong-yone-ahri-kennen-xinzhao-shen",
    name: "IONIA YUNARA YASUO",
    units: [
      "yunara",
      "yasuo",
      "wukong",
      "yone",
      "ahri",
      "kennen",
      "xinzhao",
      "shen"
    ]
  },
  {
    id: "yasuo-yone-wukong-sett-aatrox-belveth-aphelios-shen",
    name: "IONIA YASUO",
    units: [
      "yasuo",
      "yone",
      "wukong",
      "sett",
      "aatrox",
      "belveth",
      "aphelios",
      "shen"
    ]
  },
  {
    id: "wukong-ryze-sett-ziggs-taric-drmundo-kennen-vi-caitlyn",
    name: "BRUISER WUKONG SETT",
    units: [
      "wukong",
      "ryze",
      "sett",
      "ziggs",
      "taric",
      "drmundo",
      "kennen",
      "vi",
      "caitlyn"
    ]
  },
  {
    id: "skarner-yunara-sett-kindred-luciansenna-taric-wukong-jhin-shen",
    name: "IONIA SKARNER",
    units: [
      "skarner",
      "yunara",
      "sett",
      "kindred",
      "luciansenna",
      "taric",
      "wukong",
      "jhin",
      "shen"
    ]
  },
  {
    id: "lissandra-braum-volibear-zilean-kobukoyuumi-sejuani-ashe-tryndamere-anivia",
    name: "FRELJORD LISSANDRA",
    units: [
      "lissandra",
      "braum",
      "volibear",
      "zilean",
      "kobukoyuumi",
      "sejuani",
      "ashe",
      "tryndamere",
      "anivia"
    ]
  },
  {
    id: "kaisa-riftherald-belveth-baronnashor-volibear-malzahar-chogath-reksai-kogmaw",
    name: "VOID KAI'SA",
    units: [
      "kaisa",
      "riftherald",
      "belveth",
      "baronnashor",
      "volibear",
      "malzahar",
      "chogath",
      "reksai",
      "kogmaw"
    ]
  },
  {
    id: "draven-gangplank-nautilus-ambessa-seraphine-loris-twistedfate-briar",
    name: "VANQUISHER DRAVEN",
    units: [
      "draven",
      "gangplank",
      "nautilus",
      "ambessa",
      "seraphine",
      "loris",
      "twistedfate",
      "briar"
    ]
  },
  {
    id: "tryndamere-ashe-sejuani-braum-kindred-volibear-lissandra-anivia",
    name: "FRELJORD TRYNDAMERE",
    units: [
      "tryndamere",
      "ashe",
      "sejuani",
      "braum",
      "kindred",
      "volibear",
      "lissandra",
      "anivia"
    ]
  },
  {
    id: "braum-kindred-luciansenna-fiddlesticks-ornn-loris-sejuani-ashe-vi",
    name: "WARDEN BRAUM",
    units: [
      "braum",
      "kindred",
      "luciansenna",
      "fiddlesticks",
      "ornn",
      "loris",
      "sejuani",
      "ashe",
      "vi"
    ]
  },
  {
    id: "fizz-kennen-ziggs-kobukoyuumi-poppy-teemo-tristana-lulu-rumble",
    name: "YORDLE FIZZ",
    units: [
      "fizz",
      "kennen",
      "ziggs",
      "kobukoyuumi",
      "poppy",
      "teemo",
      "tristana",
      "lulu",
      "rumble"
    ]
  },
  {
    id: "sona-anivia-jarvaniv-lissandra-garen-kobukoyuumi-sejuani-rumble",
    name: "INVOKER SONA",
    units: [
      "sona",
      "anivia",
      "jarvaniv",
      "lissandra",
      "garen",
      "kobukoyuumi",
      "sejuani",
      "rumble"
    ]
  },
  {
    id: "viego-kalista-thresh-yorick-braum-gwen-loris-nautilus",
    name: "SHADOW ISLES VIEGO",
    units: [
      "viego",
      "kalista",
      "thresh",
      "yorick",
      "braum",
      "gwen",
      "loris",
      "nautilus"
    ]
  },
  {
    id: "yunara-wukong-sett-kindred-ornn-ahri-kennen-xinzhao-shen",
    name: "IONIA YUNARA",
    units: [
      "yunara",
      "wukong",
      "sett",
      "kindred",
      "ornn",
      "ahri",
      "kennen",
      "xinzhao",
      "shen"
    ]
  },
  {
    id: "wukong-lissandra-ryze-volibear-taric-kennen-kobukoyuumi-sejuani-shen",
    name: "BRUISER WUKONG",
    units: [
      "wukong",
      "lissandra",
      "ryze",
      "volibear",
      "taric",
      "kennen",
      "kobukoyuumi",
      "sejuani",
      "shen"
    ]
  },
  {
    id: "swain-ambessa-mel-draven-azir-fiddlesticks-leblanc-sion-briar",
    name: "NOXUS SWAIN",
    units: [
      "swain",
      "ambessa",
      "mel",
      "draven",
      "azir",
      "fiddlesticks",
      "leblanc",
      "sion",
      "briar"
    ]
  },
  {
    id: "belveth-aatrox-swain-ambessa-fiddlesticks-shyvana-gangplank-chogath-briar",
    name: "SLAYER BEL'VETH",
    units: [
      "belveth",
      "aatrox",
      "swain",
      "ambessa",
      "fiddlesticks",
      "shyvana",
      "gangplank",
      "chogath",
      "briar"
    ]
  },
  {
    id: "nasus-azir-annie-tibbers-shyvana-seraphine-swain-neeko-vi",
    name: "SHURIMA NASUS",
    units: [
      "nasus",
      "azir",
      "annie",
      "tibbers",
      "shyvana",
      "seraphine",
      "swain",
      "neeko",
      "vi"
    ]
  },
  {
    id: "diana-azir-annie-tibbers-shyvana-seraphine-swain-neeko-vi",
    name: "TARGON DIANA",
    units: [
      "diana",
      "azir",
      "annie",
      "tibbers",
      "shyvana",
      "seraphine",
      "swain",
      "neeko",
      "vi"
    ]
  },
  {
    id: "ryze-garen-sett-azir-nasus-taric-kennen-poppy-xinzhao",
    name: "DEFENDER RYZE",
    units: [
      "ryze",
      "garen",
      "sett",
      "azir",
      "nasus",
      "taric",
      "kennen",
      "poppy",
      "xinzhao"
    ]
  },
  {
    id: "annie-tibbers-swain-sylas-fiddlesticks-shyvana-lux-taric-neeko",
    name: "ARCANIST ANNIE",
    units: [
      "annie",
      "tibbers",
      "swain",
      "sylas",
      "fiddlesticks",
      "shyvana",
      "lux",
      "taric",
      "neeko"
    ]
  },
  {
    id: "ekko-singed-chogath-seraphine-swain-neeko-vi-blitzcrank",
    name: "ZAUN EKKO",
    units: [
      "ekko",
      "singed",
      "chogath",
      "seraphine",
      "swain",
      "neeko",
      "vi",
      "blitzcrank"
    ]
  },
  {
    id: "warwick-singed-drmundo-ziggs-kindred-seraphine-ekko-vi-blitzcrank",
    name: "ZAUN WARWICK",
    units: [
      "warwick",
      "singed",
      "drmundo",
      "ziggs",
      "kindred",
      "seraphine",
      "ekko",
      "vi",
      "blitzcrank"
    ]
  },
  {
    id: "yunara-swain-kindred-sett-fiddlesticks-luciansenna-shyvana-taric-ahri",
    name: "QUICKSTRIKER YUNARA SWAIN",
    units: [
      "yunara",
      "swain",
      "kindred",
      "sett",
      "fiddlesticks",
      "luciansenna",
      "shyvana",
      "taric",
      "ahri"
    ]
  },
  {
    id: "aurelionsol-diana-taric-leona-fiddlesticks-skarner-zoe-aphelios",
    name: "TARGON AURELION SOL",
    units: [
      "aurelionsol",
      "diana",
      "taric",
      "leona",
      "fiddlesticks",
      "skarner",
      "zoe",
      "aphelios"
    ]
  },
  {
    id: "taric-kindred-luciansenna-sylas-fiddlesticks-shyvana-swain-darius-draven",
    name: "TARGON TARIC",
    units: [
      "taric",
      "kindred",
      "luciansenna",
      "sylas",
      "fiddlesticks",
      "shyvana",
      "swain",
      "darius",
      "draven"
    ]
  },
  {
    id: "tristana-teemo-kennen-fizz-kobukoyuumi-poppy-lulu-rumble",
    name: "YORDLE TRISTANA",
    units: [
      "tristana",
      "teemo",
      "kennen",
      "fizz",
      "kobukoyuumi",
      "poppy",
      "lulu",
      "rumble"
    ]
  },
  {
    id: "jinx-drmundo-warwick-singed-luciansenna-ekko-vi-blitzcrank",
    name: "ZAUN JINX",
    units: [
      "jinx",
      "drmundo",
      "warwick",
      "singed",
      "luciansenna",
      "ekko",
      "vi",
      "blitzcrank"
    ]
  },
  {
    id: "ahri-yunara-wukong-kennen-xinzhao-yasuo-jhin-shen",
    name: "IONIA AHRI",
    units: [
      "ahri",
      "yunara",
      "wukong",
      "kennen",
      "xinzhao",
      "yasuo",
      "jhin",
      "shen"
    ]
  },
  {
    id: "yunara-braum-lissandra-kindred-volibear-sejuani-ashe-tryndamere-anivia",
    name: "QUICKSTRIKER YUNARA BRAUM",
    units: [
      "yunara",
      "braum",
      "lissandra",
      "kindred",
      "volibear",
      "sejuani",
      "ashe",
      "tryndamere",
      "anivia"
    ]
  },
  {
    id: "thex-missfortune-loris-braum-seraphine-orianna-vi-caitlyn",
    name: "PILTOVER T-HEX MISS FORTUNE",
    units: [
      "thex",
      "missfortune",
      "loris",
      "braum",
      "seraphine",
      "orianna",
      "vi",
      "caitlyn"
    ]
  },
  {
    id: "sion-volibear-yunara-drmundo-wukong-kobukoyuumi-bard-shen",
    name: "BRUISER SION VOLIBEAR",
    units: [
      "sion",
      "volibear",
      "yunara",
      "drmundo",
      "wukong",
      "kobukoyuumi",
      "bard",
      "shen"
    ]
  },
  {
    id: "missfortune-nautilus-fizz-tahmkench-gangplank-graves-twistedfate-illaoi",
    name: "BILGEWATER MISS FORTUNE",
    units: [
      "missfortune",
      "nautilus",
      "fizz",
      "tahmkench",
      "gangplank",
      "graves",
      "twistedfate",
      "illaoi"
    ]
  },
  {
    id: "ahri-milio-skarner-wukong-taric-kennen-kobukoyuumi-neeko",
    name: "ARCANIST AHRI",
    units: [
      "ahri",
      "milio",
      "skarner",
      "wukong",
      "taric",
      "kennen",
      "kobukoyuumi",
      "neeko"
    ]
  },
  {
    id: "kalista-thresh-gwen-yorick-fiddlesticks-seraphine-loris-viego",
    name: "SHADOW ISLES KALISTA  THRESH",
    units: [
      "kalista",
      "thresh",
      "gwen",
      "yorick",
      "fiddlesticks",
      "seraphine",
      "loris",
      "viego"
    ]
  },
  {
    id: "lissandra-skarner-milio-braum-nidalee-sejuani-neeko-qiyana",
    name: "INVOKER LISSANDRA SKARNER",
    units: [
      "lissandra",
      "skarner",
      "milio",
      "braum",
      "nidalee",
      "sejuani",
      "neeko",
      "qiyana"
    ]
  },
  {
    id: "draven-sion-ambessa-leblanc-mel-swain-darius-briar",
    name: "NOXUS DRAVEN",
    units: [
      "draven",
      "sion",
      "ambessa",
      "leblanc",
      "mel",
      "swain",
      "darius",
      "briar"
    ]
  },
  {
    id: "aphelios-leona-aurelionsol-diana-ornn-braum-taric-zoe",
    name: "TARGON APHELIOS",
    units: [
      "aphelios",
      "leona",
      "aurelionsol",
      "diana",
      "ornn",
      "braum",
      "taric",
      "zoe"
    ]
  },
  {
    id: "vayne-jarvaniv-lux-garen-galio-swain-poppy-xinzhao-sona",
    name: "DEMACIA VAYNE JARVAN IV",
    units: [
      "vayne",
      "jarvaniv",
      "lux",
      "garen",
      "galio",
      "swain",
      "poppy",
      "xinzhao",
      "sona"
    ]
  },
  {
    id: "zoe-leona-diana-taric",
    name: "TARGON ZOE",
    units: [
      "zoe",
      "leona",
      "diana",
      "taric"
    ]
  },
  {
    id: "lissandra-sejuani-leblanc-swain-shyvana-kobukoyuumi-sion-anivia",
    name: "INVOKER LISSANDRA",
    units: [
      "lissandra",
      "sejuani",
      "leblanc",
      "swain",
      "shyvana",
      "kobukoyuumi",
      "sion",
      "anivia"
    ]
  },
  {
    id: "nidalee-neeko-milio-skarner-braum-lissandra-sejuani-qiyana",
    name: "IXTAL NIDALEE",
    units: [
      "nidalee",
      "neeko",
      "milio",
      "skarner",
      "braum",
      "lissandra",
      "sejuani",
      "qiyana"
    ]
  },
  {
    id: "bard-neeko-milio-nidalee-skarner-orianna-vi-qiyana",
    name: "IXTAL BARD",
    units: [
      "bard",
      "neeko",
      "milio",
      "nidalee",
      "skarner",
      "orianna",
      "vi",
      "qiyana"
    ]
  },
  {
    id: "diana-leona-azir-seraphine-swain-taric-neeko-vi",
    name: "TARGON LEONA",
    units: [
      "diana",
      "leona",
      "azir",
      "seraphine",
      "swain",
      "taric",
      "neeko",
      "vi"
    ]
  },
  {
    id: "skarner-milio-brock-neeko-tibbers-annie-swain-qiyana",
    name: "IXTAL SKARNER",
    units: [
      "skarner",
      "milio",
      "brock",
      "neeko",
      "tibbers",
      "annie",
      "swain",
      "qiyana"
    ]
  },
  {
    id: "jhin-yasuo-shen-ahri-wukong-yunara-kennen-xinzhao",
    name: "IONIA JHIN",
    units: [
      "jhin",
      "yasuo",
      "shen",
      "ahri",
      "wukong",
      "yunara",
      "kennen",
      "xinzhao"
    ]
  }
];

export default compositions;