/**
 * A pool of target compositions for the game to choose from.
 * Each composition includes:
 *  - id:       unique string key
 *  - name:     human-readable label
 *  - units:    array of unit IDs (must match your units.js ids)
 *  - headliner: which unit and trait is doubled
 */
const compositions = [
  {
    id: "lucian-janna-swain-ryze-volibear-jarvan-braum-yone-zyra",
    name: "MECHA YONE ZYRA",
    units: [
      "lucian",
      "janna",
      "swain",
      "ryze",
      "volibear",
      "jarvaniv",
      "braum",
      "yone",
      "zyra"
    ],
  },
  {
    id: "aatrox-lucian-kobuko-udyr-yasuo-karma-jarvan-ryze-yone",
    name: "Aatrox Lucian Kobuko Udyr Yasuo Karma Jarvan Ryze Yone Comp",
    units: [
      "aatrox",
      "lucian",
      "kobuko",
      "udyr",
      "yasuo",
      "karma",
      "jarvaniv",
      "ryze",
      "yone"
    ],
  },
  {
    id: "aatrox-lucian-gangplank-senna-ryze-jarvan-karma-yone",
    name: "Aatrox Lucian Gangplank Senna Ryze Jarvan Karma Yone Comp",
    units: [
      "aatrox",
      "lucian",
      "gangplank",
      "senna",
      "ryze",
      "jarvaniv",
      "karma",
      "yone"
    ],
  },
  {
  id: "vi-swain-sett-volibear-braum-yone-gwen-twistedfate-zyra",
    name: "Vi Swain Sett Volibear Braum Yone Gwen Twisted Fate Zyra Comp",
    units: [
      "vi",
      "swain",
      "sett",
      "volibear",
      "braum",
      "yone",
      "gwen",
      "twistedfate",
      "zyra"
    ],
  },
  {
    id: "dr-mundo-shen-udyr-sett-braum-lee-sin-gwen-twisted-fate-yone",
    name: "Dr. Mundo Shen Udyr Sett Braum Lee Sin Gwen Twisted Fate Yone Comp",
    units: [
      "drmundo",
      "shen",
      "udyr",
      "sett",
      "braum",
      "leesin",
      "gwen",
      "twistedfate",
      "yone"
    ],
  },
  {
    id: "aatrox-naafiri-dr-mundo-vi-udyr-ashe-sett-zyra",
    name: "Aatrox Naafiri Dr. Mundo Vi Udyr Ashe Sett Zyra Comp",
    units: [
      "aatrox",
      "naafiri",
      "drmundo",
      "vi",
      "udyr",
      "ashe",
      "sett",
      "zyra"
    ],
  },
  {
    id: "ezreal-garen-syndra-rakan-malzahar-k-sante-leona-yuumi-seraphine",
    name: "Ezreal Garen Syndra Rakan Malzahar K'Sante Leona Yuumi Seraphine Comp",
    units: [
      "ezreal",
      "garen",
      "syndra",
      "rakan",
      "malzahar",
      "ksante",
      "leona",
      "yuumi",
      "seraphine"
    ],
  },

]

export default compositions;