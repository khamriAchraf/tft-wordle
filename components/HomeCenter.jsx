import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Badge } from '@mantine/core';


const HomeCenter = ({ isExpanded, onClick }) => {

    return (
        <div onClick={onClick} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Badge className={styles.set14Badge} size="xl">14</Badge>

            <img
                className={styles.background}
                src="/images/cybercity-bg.jpg"
                alt=""
            />
            <img
                className={styles.centerLogo}
                src="/images/set-14-logo.png"
                alt=""
            />
            <div className={`${styles.buttonGroup} ${isExpanded ? styles.visible : ''}`} onClick={(e) => e.stopPropagation()}>
                <Link href="/cybercity">
                    <button className={styles.modeButton}>Daily</button>
                </Link>
                <Link href="/cybercity/levels">
                    <button className={styles.modeButton}>All Levels</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeCenter