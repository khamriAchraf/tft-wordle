const compositions = [
  {
    "id": "1",
    "name": "ARCANIST AZIR",
    "units": [
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
    "id": "2",
    "name": "IONIA YUNARA WUKONG",
    "units": [
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
    "id": "3",
    "name": "QUICKSTRIKER TRYNDAMERE",
    "units": [
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
    "id": "4",
    "name": "QUICKSTRIKER KINDRED",
    "units": [
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
    "id": "5",
    "name": "BILGEWATER MISS FORTUNE TAHM KENCH",
    "units": [
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
    "id": "6",
    "name": "YORDLE VEIGAR",
    "units": [
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
    "id": "7",
    "name": "QUICKSTRIKER YUNARA",
    "units": [
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
    "id": "8",
    "name": "DEMACIA VAYNE",
    "units": [
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
    "id": "9",
    "name": "PILTOVER T-HEX SERAPHINE",
    "units": [
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
    "id": "10",
    "name": "TARGON DIANA  TARIC",
    "units": [
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
    "id": "11",
    "name": "DEMACIA LUX",
    "units": [
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
    "id": "12",
    "name": "SHADOW ISLES KALISTA",
    "units": [
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
    "id": "13",
    "name": "BRUISER SION",
    "units": [
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
    "id": "14",
    "name": "PILTOVER T-HEX JARVAN IV",
    "units": [
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
    "id": "15",
    "name": "ARCANIST SWAIN",
    "units": [
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
    "id": "16",
    "name": "PILTOVER T-HEX",
    "units": [
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
    "id": "17",
    "name": "IONIA YUNARA YASUO",
    "units": [
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
    "id": "18",
    "name": "IONIA YASUO",
    "units": [
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
    "id": "19",
    "name": "BRUISER WUKONG SETT",
    "units": [
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
    "id": "20",
    "name": "IONIA SKARNER",
    "units": [
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
    "id": "21",
    "name": "FRELJORD LISSANDRA",
    "units": [
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
    "id": "22",
    "name": "VOID KAI'SA",
    "units": [
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
    "id": "23",
    "name": "VANQUISHER DRAVEN",
    "units": [
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
    "id": "24",
    "name": "FRELJORD TRYNDAMERE",
    "units": [
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
    "id": "25",
    "name": "WARDEN BRAUM",
    "units": [
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
    "id": "26",
    "name": "YORDLE FIZZ",
    "units": [
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
    "id": "27",
    "name": "INVOKER SONA",
    "units": [
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
    "id": "28",
    "name": "SHADOW ISLES VIEGO",
    "units": [
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
    "id": "29",
    "name": "IONIA YUNARA",
    "units": [
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
    "id": "30",
    "name": "BRUISER WUKONG",
    "units": [
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
    "id": "31",
    "name": "NOXUS SWAIN",
    "units": [
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
    "id": "32",
    "name": "SLAYER BEL'VETH",
    "units": [
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
    "id": "33",
    "name": "SHURIMA NASUS",
    "units": [
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
    "id": "34",
    "name": "TARGON DIANA",
    "units": [
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
    "id": "35",
    "name": "DEFENDER RYZE",
    "units": [
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
    "id": "36",
    "name": "ARCANIST ANNIE",
    "units": [
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
    "id": "37",
    "name": "ZAUN EKKO",
    "units": [
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
    "id": "38",
    "name": "ZAUN WARWICK",
    "units": [
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
    "id": "39",
    "name": "QUICKSTRIKER YUNARA SWAIN",
    "units": [
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
    "id": "40",
    "name": "TARGON AURELION SOL",
    "units": [
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
    "id": "41",
    "name": "TARGON TARIC",
    "units": [
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
    "id": "42",
    "name": "YORDLE TRISTANA",
    "units": [
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
    "id": "43",
    "name": "ZAUN JINX",
    "units": [
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
    "id": "44",
    "name": "IONIA AHRI",
    "units": [
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
    "id": "45",
    "name": "QUICKSTRIKER YUNARA BRAUM",
    "units": [
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
    "id": "46",
    "name": "PILTOVER T-HEX MISS FORTUNE",
    "units": [
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
    "id": "47",
    "name": "BRUISER SION VOLIBEAR",
    "units": [
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
    "id": "48",
    "name": "BILGEWATER MISS FORTUNE",
    "units": [
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
    "id": "49",
    "name": "ARCANIST AHRI",
    "units": [
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
    "id": "50",
    "name": "SHADOW ISLES KALISTA  THRESH",
    "units": [
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
    "id": "51",
    "name": "INVOKER LISSANDRA SKARNER",
    "units": [
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
    "id": "52",
    "name": "NOXUS DRAVEN",
    "units": [
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
    "id": "53",
    "name": "TARGON APHELIOS",
    "units": [
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
    "id": "54",
    "name": "DEMACIA VAYNE JARVAN IV",
    "units": [
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
    "id": "55",
    "name": "TARGON ZOE",
    "units": [
      "zoe",
      "leona",
      "diana",
      "taric"
    ]
  },
  {
    "id": "56",
    "name": "INVOKER LISSANDRA",
    "units": [
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
    "id": "57",
    "name": "IXTAL NIDALEE",
    "units": [
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
    "id": "58",
    "name": "IXTAL BARD",
    "units": [
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
    "id": "59",
    "name": "TARGON LEONA",
    "units": [
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
    "id": "60",
    "name": "IXTAL SKARNER",
    "units": [
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
    "id": "61",
    "name": "IONIA JHIN",
    "units": [
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

export default compositions