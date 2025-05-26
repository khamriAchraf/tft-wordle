// src/components/TraitItem.jsx
import React from 'react';
import { traits as traitData } from '../data/remix-rumble/traits';
import styles from '@/styles/TraitItem.module.css';

export default function TraitItem({ id, count }) {
    // Lookup trait definition
    const def = traitData.find((t) => t.id === id);
    const name = def ? def.name : id.charAt(0).toUpperCase() + id.slice(1);
    const breakpoints = def?.breakpoints || [];
    const tiers = def?.tiers || [];

    // Determine tier index for background
    let tierIndex = -1;
    breakpoints.forEach((bp, idx) => {
        if (count >= bp) tierIndex = idx;
    });
    const tierName = tierIndex >= 0 ? tiers[tierIndex] : 'inactive';

    // Background image for tier
    const bgUrl = `/images/traits/${tierName}.png`;

    return (
        <li className={styles.item}>
            <div
                className={styles.iconWrapper}
                style={{ backgroundImage: `url(${bgUrl})` }}
            >
                <img
                    src={`/images/traits/${id}.png`}
                    alt={name}
                    className={styles.icon}
                />
            </div>
            <div className={styles.text}>
                <div className={styles.header}>
                    <span className={styles.count}>{count}</span>
                    <span className={styles.hyphen}> - </span>
                    <span className={styles.name}>{name}</span>
                </div>
                <div className={styles.breakpoints}>
                    {breakpoints.map((bp, idx) => (
                        <React.Fragment key={bp}>
                            {idx > 0 && <span className={styles.sep}>|</span>}
                            <span
                                className={
                                    count >= bp ? styles.bpActive : styles.bpInactive
                                }
                            >
                                {bp}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </li>
    );
}
