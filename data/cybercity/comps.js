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
    id: "guardsman",
    name: "Guardsman",
    units: [
      "aphelios",
      "missfortune",
      "xayah",
      "jhin",
      "leona",
      "raast",
      "jarvaniv",
      "braum",
      "aurora",
    ],
  },
]