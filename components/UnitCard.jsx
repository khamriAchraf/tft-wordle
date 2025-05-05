import React from 'react'
import styles from '@/styles/UnitCard.module.css'

const UnitCard = ({ unit, onAction, actionLabel }) => {
    return (
        <div className={styles.card}>
            <div className={styles.unitName}>{unit.name}</div>
            <div className={styles.unitTraits}>{unit.traits.join(', ')}</div>
            <button
                className={styles.actionButton}
                onClick={() => onAction(unit)}
            >
                {actionLabel}
            </button>
        </div>
    );
}

export default UnitCard