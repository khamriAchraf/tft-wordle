import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Badge } from '@mantine/core';


const HomeLeft = () => {

    return (
        <>
            <Link href="/ko-coliseum">
                <Badge className={styles.set15Badge} size="xl">Set 15</Badge>

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
            </Link>
        </>
    )
}

export default HomeLeft