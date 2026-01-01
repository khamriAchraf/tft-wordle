import React from 'react'
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Badge } from '@mantine/core';


const HomeSection4 = ({ isExpanded, onClick }) => {

    return (
        <div onClick={onClick} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Badge className={styles.set16Badge} size="xl">16</Badge>

            <img
                className={styles.background}
                src="/images/lore-and-legends-bg.jpg"
                alt=""
            />
            <img
                className={styles.section4Logo}
                src="/images/set-16-logo.png"
                alt=""
            />
            <div className={`${styles.buttonGroup} ${isExpanded ? styles.visible : ''}`} onClick={(e) => e.stopPropagation()}>
                <Link href="/lore-and-legends">
                    <button className={styles.modeButton}>Daily</button>
                </Link>
                <Link href="/lore-and-legends/levels">
                    <button className={styles.modeButton}>All Levels</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeSection4
