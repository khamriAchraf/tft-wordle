import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Badge } from '@mantine/core';


const HomeCenter = () => {

    return (
        <>
            <Link href="/cybercity">
                <Badge className={styles.set14Badge} size="xl">Set 14</Badge>

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
            </Link>
        </>
    )
}

export default HomeCenter