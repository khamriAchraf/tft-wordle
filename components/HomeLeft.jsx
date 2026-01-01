import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Badge } from '@mantine/core';


const HomeLeft = ({ isExpanded, onClick }) => {

    return (
        <div onClick={onClick} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Badge className={styles.set15Badge} size="xl">15</Badge>

            <img
                className={styles.background}
                src="/images/ko.jpg"
                alt=""
            />
            <img
                className={styles.leftLogo}
                src="/images/set-15-logo.png"
                alt=""
            />
            <div className={`${styles.buttonGroup} ${isExpanded ? styles.visible : ''}`} onClick={(e) => e.stopPropagation()}>
                <Link href="/ko-coliseum">
                    <button className={styles.modeButton}>Daily</button>
                </Link>
                <Link href="/ko-coliseum/levels">
                    <button className={styles.modeButton}>All Levels</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeLeft