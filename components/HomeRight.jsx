import React from 'react'
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Badge, Text } from '@mantine/core';


const HomeRight = ({ isExpanded, onClick }) => {

    return (
        <div onClick={onClick} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Badge className={styles.set10Badge} size="xl">10</Badge>

            <img
                className={styles.background}
                src="/images/remix-rumble-bg.jpg"
                alt=""
            />
            <img
                className={styles.rightLogo}
                src="/images/set-10-logo.png"
                alt=""
            />
            <div className={`${styles.buttonGroup} ${isExpanded ? styles.visible : ''}`} onClick={(e) => e.stopPropagation()}>
                <Link href="/remix-rumble">
                    <button className={styles.modeButton}>Daily</button>
                </Link>
                <Link href="/remix-rumble/levels">
                    <button className={styles.modeButton}>All Levels</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeRight