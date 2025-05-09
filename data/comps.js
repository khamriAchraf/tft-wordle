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
        id: 'kda-spellweaver',
        name: 'K/DA Spellweaver',
        units: [1, 4, 2, 3],      // Ahri, Annie, Akali, Akali_TrueDamage, Amumu
        headliner: { unitId: 1, traitId: 'kda' },
    },
    {
        id: 'heartsteel-rapidfire',
        name: 'Heartsteel Rapidfire',
        units: [5, 2, 4, 3, 1],       // Aphelios, Akali, Annie, Amumu, Ahri
        headliner: { unitId: 5, traitId: 'heartsteel' },
    },
    {
        id: 'emo-guardian',
        name: 'Emo Guardian',
        units: [3, 4, 1, 5, 2],       // Amumu, Annie, Ahri, Aphelios, Akali
        headliner: { unitId: 3, traitId: 'emo' },
    },
    // …add more compositions as desired
];

export default compositions;
