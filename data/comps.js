// src/data/comps.js

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
        id: 'sounds-valor',
        name: 'Sounds Of Valor',
        units: [35, 8, 47, 28, 49, 22, 60, 21],       // Amumu, Annie, Ahri, Aphelios, Akali
        headliner: { unitId: 35, traitId: '8bit' },
    },
    {
        id: 'kda-all-out',
        name: 'K/DA All Out',
        units: [1, 2, 10, 30, 38, 59, 23, 24],       // Amumu, Annie, Ahri, Aphelios, Akali
        headliner: { unitId: 2, traitId: 'kda' },
    },
    {
        id: 'country-roads',
        name: 'Country Roads',
        units: [36, 39, 44, 45, 42, 3, 56],       // Amumu, Annie, Ahri, Aphelios, Akali
        headliner: { unitId: 36, traitId: 'country' },
    },
    {
        id: 'edmoshing',
        name: 'EDMoshing',
        units: [52, 16, 51, 27, 54, 39, 49, 6],       // Amumu, Annie, Ahri, Aphelios, Akali
        headliner: { unitId: 16, traitId: 'edm' },
    },
];

export default compositions;
