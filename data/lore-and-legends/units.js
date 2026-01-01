const units = [
  {
    id: "anivia",
    name: "Anivia",
    cost: 1,
    traits: [
      "freljord",
      "invoker"
    ]
  },
  {
    id: "blitzcrank",
    name: "Blitzcrank",
    cost: 1,
    traits: [
      "zaun",
      "juggernaut"
    ]
  },
  {
    id: "briar",
    name: "Briar",
    cost: 1,
    traits: [
      "noxus",
      "slayer",
      "juggernaut"
    ]
  },
  {
    id: "caitlyn",
    name: "Caitlyn",
    cost: 1,
    traits: [
      "piltover",
      "longshot"
    ]
  },
  {
    id: "illaoi",
    name: "Illaoi",
    cost: 1,
    traits: [
      "bilgewater",
      "bruiser"
    ]
  },
  {
    id: "jarvaniv",
    name: "Jarvan IV",
    cost: 1,
    traits: [
      "demacia",
      "defender"
    ]
  },
  {
    id: "jhin",
    name: "Jhin",
    cost: 1,
    traits: [
      "ionia",
      "gunslinger"
    ]
  },
  {
    id: "kogmaw",
    name: "Kog'Maw",
    cost: 1,
    traits: [
      "void",
      "arcanist",
      "longshot"
    ]
  },
  {
    id: "lulu",
    name: "Lulu",
    cost: 1,
    traits: [
      "yordle",
      "arcanist"
    ]
  },
  {
    id: "qiyana",
    name: "Qiyana",
    cost: 1,
    traits: [
      "ixtal",
      "slayer"
    ]
  },
  {
    id: "rumble",
    name: "Rumble",
    cost: 1,
    traits: [
      "yordle",
      "defender"
    ]
  },
  {
    id: "shen",
    name: "Shen",
    cost: 1,
    traits: [
      "ionia",
      "bruiser"
    ]
  },
  {
    id: "sona",
    name: "Sona",
    cost: 1,
    traits: [
      "demacia",
      "invoker"
    ]
  },
  {
    id: "viego",
    name: "Viego",
    cost: 1,
    traits: [
      "shadowisles",
      "quickstriker"
    ]
  },
  {
    id: "aphelios",
    name: "Aphelios",
    cost: 2,
    traits: [
      "targon"
    ]
  },
  {
    id: "ashe",
    name: "Ashe",
    cost: 2,
    traits: [
      "freljord",
      "quickstriker"
    ]
  },
  {
    id: "bard",
    name: "Bard",
    unlockable: true,
    cost: 2,
    traits: [
      "caretaker"
    ]
  },
  {
    id: "chogath",
    name: "Cho'Gath",
    cost: 2,
    traits: [
      "void",
      "juggernaut"
    ]
  },
  {
    id: "ekko",
    name: "Ekko",
    cost: 2,
    traits: [
      "zaun",
      "disruptor"
    ]
  },
  {
    id: "graves",
    name: "Graves",
    unlockable: true,
    cost: 2,
    traits: [
      "bilgewater",
      "gunslinger"
    ]
  },
  {
    id: "neeko",
    name: "Neeko",
    cost: 2,
    traits: [
      "ixtal",
      "arcanist",
      "defender"
    ]
  },
  {
    id: "orianna",
    name: "Orianna",
    unlockable: true,
    cost: 2,
    traits: [
      "piltover",
      "invoker"
    ]
  },
  {
    id: "poppy",
    name: "Poppy",
    unlockable: true,
    cost: 2,
    traits: [
      "demacia",
      "yordle",
      "juggernaut"
    ]
  },
  {
    id: "reksai",
    name: "Rek'Sai",
    cost: 2,
    traits: [
      "void",
      "vanquisher"
    ]
  },
  {
    id: "sion",
    name: "Sion",
    cost: 2,
    traits: [
      "noxus",
      "bruiser"
    ]
  },
  {
    id: "teemo",
    name: "Teemo",
    cost: 2,
    traits: [
      "yordle",
      "longshot"
    ]
  },
  {
    id: "tristana",
    name: "Tristana",
    cost: 2,
    traits: [
      "yordle",
      "gunslinger"
    ]
  },
  {
    id: "tryndamere",
    name: "Tryndamere",
    unlockable: true,
    cost: 2,
    traits: [
      "freljord",
      "slayer"
    ]
  },
  {
    id: "twistedfate",
    name: "TwistedFate",
    cost: 2,
    traits: [
      "bilgewater",
      "quickstriker"
    ]
  },
  {
    id: "vi",
    name: "Vi",
    cost: 2,
    traits: [
      "piltover",
      "zaun",
      "defender"
    ]
  },
  {
    id: "xinzhao",
    name: "XinZhao",
    cost: 2,
    traits: [
      "demacia",
      "ionia",
      "warden"
    ]
  },
  {
    id: "yasuo",
    name: "Yasuo",
    cost: 2,
    traits: [
      "ionia",
      "slayer"
    ]
  },
  {
    id: "yorick",
    name: "Yorick",
    unlockable: true,
    cost: 2,
    traits: [
      "shadowisles",
      "warden"
    ]
  },
  {
    id: "ahri",
    name: "Ahri",
    cost: 3,
    traits: [
      "ionia",
      "arcanist"
    ]
  },
  {
    id: "darius",
    name: "Darius",
    unlockable: true,
    cost: 3,
    traits: [
      "noxus",
      "defender"
    ]
  },
  {
    id: "drmundo",
    name: "Dr.Mundo",
    cost: 3,
    traits: [
      "zaun",
      "bruiser"
    ]
  },
  {
    id: "draven",
    name: "Draven",
    cost: 3,
    traits: [
      "noxus",
      "quickstriker"
    ]
  },
  {
    id: "gangplank",
    name: "Gangplank",
    cost: 3,
    traits: [
      "bilgewater",
      "slayer",
      "vanquisher"
    ]
  },
  {
    id: "gwen",
    name: "Gwen",
    unlockable: true,
    cost: 3,
    traits: [
      "shadowisles",
      "disruptor"
    ]
  },
  {
    id: "jinx",
    name: "Jinx",
    cost: 3,
    traits: [
      "zaun",
      "gunslinger"
    ]
  },
  {
    id: "kennen",
    name: "Kennen",
    unlockable: true,
    cost: 3,
    traits: [
      "ionia",
      "yordle",
      "defender"
    ]
  },
  {
    id: "kobukoyuumi",
    name: "Kobuko & Yuumi",
    unlockable: true,
    cost: 3,
    traits: [
      "yordle",
      "bruiser",
      "invoker"
    ]
  },
  {
    id: "leblanc",
    name: "LeBlanc",
    unlockable: true,
    cost: 3,
    traits: [
      "noxus",
      "invoker"
    ]
  },
  {
    id: "leona",
    name: "Leona",
    cost: 3,
    traits: [
      "targon"
    ]
  },
  {
    id: "loris",
    name: "Loris",
    cost: 3,
    traits: [
      "piltover",
      "warden"
    ]
  },
  {
    id: "malzahar",
    name: "Malzahar",
    cost: 3,
    traits: [
      "void",
      "disruptor"
    ]
  },
  {
    id: "milio",
    name: "Milio",
    cost: 3,
    traits: [
      "ixtal",
      "invoker"
    ]
  },
  {
    id: "nautilus",
    name: "Nautilus",
    cost: 3,
    traits: [
      "bilgewater",
      "juggernaut",
      "warden"
    ]
  },
  {
    id: "sejuani",
    name: "Sejuani",
    cost: 3,
    traits: [
      "freljord",
      "defender"
    ]
  },
  {
    id: "vayne",
    name: "Vayne",
    cost: 3,
    traits: [
      "demacia",
      "longshot"
    ]
  },
  {
    id: "zoe",
    name: "Zoe",
    cost: 3,
    traits: [
      "targon"
    ]
  },
  {
    id: "ambessa",
    name: "Ambessa",
    cost: 4,
    traits: [
      "noxus",
      "vanquisher"
    ]
  },
  {
    id: "belveth",
    name: "Bel'Veth",
    cost: 4,
    traits: [
      "void",
      "slayer"
    ]
  },
  {
    id: "braum",
    name: "Braum",
    cost: 4,
    traits: [
      "freljord",
      "warden"
    ]
  },
  {
    id: "diana",
    name: "Diana",
    unlockable: true,
    cost: 4,
    traits: [
      "targon"
    ]
  },
  {
    id: "fizz",
    name: "Fizz",
    unlockable: true,
    cost: 4,
    traits: [
      "bilgewater",
      "yordle"
    ]
  },
  {
    id: "garen",
    name: "Garen",
    cost: 4,
    traits: [
      "demacia",
      "defender"
    ]
  },
  {
    id: "kaisa",
    name: "Kai'Sa",
    unlockable: true,
    cost: 4,
    traits: [
      "assimilator",
      "void",
      "longshot"
    ]
  },
  {
    id: "kalista",
    name: "Kalista",
    cost: 4,
    traits: [
      "shadowisles",
      "vanquisher"
    ]
  },
  {
    id: "lissandra",
    name: "Lissandra",
    cost: 4,
    traits: [
      "freljord",
      "invoker"
    ]
  },
  {
    id: "lux",
    name: "Lux",
    cost: 4,
    traits: [
      "demacia",
      "arcanist"
    ]
  },
  {
    id: "missfortune",
    name: "MissFortune",
    cost: 4,
    traits: [
      "bilgewater",
      "gunslinger"
    ]
  },
  {
    id: "nasus",
    name: "Nasus",
    unlockable: true,
    cost: 4,
    traits: [
      "shurima"
    ]
  },
  {
    id: "nidalee",
    name: "Nidalee",
    unlockable: true,
    cost: 4,
    traits: [
      "ixtal",
      "huntress"
    ]
  },
  {
    id: "renekton",
    name: "Renekton",
    unlockable: true,
    cost: 4,
    traits: [
      "shurima"
    ]
  },
  {
    id: "riftherald",
    name: "Rift Herald",
    unlockable: true,
    cost: 4,
    traits: [
      "void",
      "bruiser"
    ]
  },
  {
    id: "seraphine",
    name: "Seraphine",
    cost: 4,
    traits: [
      "piltover",
      "disruptor"
    ]
  },
  {
    id: "singed",
    name: "Singed",
    unlockable: true,
    cost: 4,
    traits: [
      "zaun",
      "juggernaut"
    ]
  },
  {
    id: "skarner",
    name: "Skarner",
    unlockable: true,
    cost: 4,
    traits: [
      "ixtal"
    ]
  },
  {
    id: "swain",
    name: "Swain",
    cost: 4,
    traits: [
      "noxus",
      "arcanist",
      "juggernaut"
    ]
  },
  {
    id: "taric",
    name: "Taric",
    cost: 4,
    traits: [
      "targon"
    ]
  },
  {
    id: "veigar",
    name: "Veigar",
    unlockable: true,
    cost: 4,
    traits: [
      "yordle",
      "arcanist"
    ]
  },
  {
    id: "warwick",
    name: "Warwick",
    unlockable: true,
    cost: 4,
    traits: [
      "zaun",
      "quickstriker"
    ]
  },
  {
    id: "wukong",
    name: "Wukong",
    cost: 4,
    traits: [
      "ionia",
      "bruiser"
    ]
  },
  {
    id: "yone",
    name: "Yone",
    unlockable: true,
    cost: 4,
    traits: [
      "ionia",
      "slayer"
    ]
  },
  {
    id: "yunara",
    name: "Yunara",
    cost: 4,
    traits: [
      "ionia",
      "quickstriker"
    ]
  },
  {
    id: "aatrox",
    name: "Aatrox",
    unlockable: true,
    cost: 5,
    traits: [
      "darkin",
      "worldender",
      "slayer"
    ]
  },
  {
    id: "annie",
    name: "Annie",
    cost: 5,
    traits: [
      "darkchild",
      "arcanist"
    ]
  },
  {
    id: "azir",
    name: "Azir",
    cost: 5,
    traits: [
      "shurima",
      "emperor",
      "disruptor"
    ]
  },
  {
    id: "fiddlesticks",
    name: "Fiddlesticks",
    cost: 5,
    traits: [
      "harvester",
      "vanquisher"
    ]
  },
  {
    id: "galio",
    name: "Galio",
    unlockable: true,
    cost: 5,
    traits: [
      "demacia",
      "heroic"
    ]
  },
  {
    id: "kindred",
    name: "Kindred",
    cost: 5,
    traits: [
      "eternal",
      "quickstriker"
    ]
  },
  {
    id: "luciansenna",
    name: "Lucian & Senna",
    cost: 5,
    traits: [
      "soulbound",
      "gunslinger"
    ]
  },
  {
    id: "mel",
    name: "Mel",
    unlockable: true,
    cost: 5,
    traits: [
      "noxus",
      "disruptor"
    ]
  },
  {
    id: "ornn",
    name: "Ornn",
    cost: 5,
    traits: [
      "blacksmith",
      "warden"
    ]
  },
  {
    id: "ryze",
    name: "Ryze",
    unlockable: true,
    cost: 5,
    traits: [
      "runemage"
    ]
  },
  {
    id: "sett",
    name: "Sett",
    unlockable: true,
    cost: 5,
    traits: [
      "ionia",
      "theboss"
    ]
  },
  {
    id: "shyvana",
    name: "Shyvana",
    cost: 5,
    traits: [
      "dragonborn",
      "juggernaut"
    ]
  },
  {
    id: "thex",
    name: "T-Hex",
    unlockable: true,
    cost: 5,
    traits: [
      "hexmech",
      "piltover",
      "gunslinger"
    ]
  },
  {
    id: "tahmkench",
    name: "Tahm Kench",
    unlockable: true,
    cost: 5,
    traits: [
      "bilgewater",
      "glutton",
      "bruiser"
    ]
  },
  {
    id: "thresh",
    name: "Thresh",
    unlockable: true,
    cost: 5,
    traits: [
      "shadowisles",
      "warden"
    ]
  },
  {
    id: "volibear",
    name: "Volibear",
    unlockable: true,
    cost: 5,
    traits: [
      "freljord",
      "bruiser"
    ]
  },
  {
    id: "xerath",
    name: "Xerath",
    unlockable: true,
    cost: 5,
    traits: [
      "shurima",
      "ascendant"
    ]
  },
  {
    id: "ziggs",
    name: "Ziggs",
    unlockable: true,
    cost: 5,
    traits: [
      "zaun",
      "yordle",
      "longshot"
    ]
  },
  {
    id: "zilean",
    name: "Zilean",
    cost: 5,
    traits: [
      "chronokeeper",
      "invoker"
    ]
  },
  {
    id: "aurelionsol",
    name: "Aurelion Sol",
    unlockable: true,
    cost: 7,
    traits: [
      "starforger",
      "targon"
    ]
  },
  {
    id: "baronnashor",
    name: "Baron Nashor",
    unlockable: true,
    cost: 7,
    traits: [
      "void",
      "riftscourge"
    ]
  },
  {
    id: "brock",
    name: "Brock",
    unlockable: true,
    cost: 7,
    traits: [
      "ixtal"
    ]
  },
  {
    id: "sylas",
    name: "Sylas",
    unlockable: true,
    cost: 7,
    traits: [
      "chainbreaker",
      "arcanist",
      "defender"
    ]
  },
  {
    id: "zaahen",
    name: "Zaahen",
    unlockable: true,
    cost: 7,
    traits: [
      "darkin",
      "immortal"
    ]
  },
  {
    id: "tibbers",
    name: "Tibbers",
    cost: 5,
    traits: [
      "Arcanist"
    ]
  }
];

export default units;