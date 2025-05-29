import React from 'react'
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Text } from '@mantine/core';


const HomeRight = () => {

    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={styles.right} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href="/remix-rumble">
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
            </Link>
        </div>
    )
}

export default HomeRight