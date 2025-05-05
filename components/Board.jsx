import React from 'react'
import { useBoard } from '../contexts/BoardContext';
import UnitCard from './UnitCard';
import TraitPanel from './TraitPanel';
import styles from '@/styles/Board.module.css'
import UnitPool from './UnitPool';

const Board = () => {
    const { units, team, addUnit, removeUnit, activeTraits } = useBoard();

    return (
        <div className={styles.container}>
            {/* Champion Pool */}
            <div className={styles.championPool}>
                <UnitPool />
            </div>

            {/* Traits Panel */}
            <div className={styles.traits}>
                <TraitPanel activeTraits={activeTraits} /> 
            </div>

            {/* Current Team */}
            <div className={styles.board}>
                <div className={styles.panel}>
                    <h1 className={styles.title}>Your Team</h1>
                    <button className={styles.clear} onClick={() => team.forEach(removeUnit)}>
                        Clear All
                    </button>
                </div>
                <div className={styles.myBoard}>
                    {team.length === 0 ? (
                        <p className="italic">No units selected</p>
                    ) : (
                        team.map((unit) => (
                            <UnitCard
                                key={unit.id}
                                unit={unit}
                                onAction={removeUnit}
                                actionLabel="Remove"
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Board