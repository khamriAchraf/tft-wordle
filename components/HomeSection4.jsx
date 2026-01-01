import React from 'react'
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Badge } from '@mantine/core';


const HomeSection4 = () => {

    return (
        <>
            <Link href="/lore-and-legends">
                <Badge className={styles.set16Badge} size="xl">Set 16</Badge>

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
            </Link>
        </>
    )
}

export default HomeSection4
