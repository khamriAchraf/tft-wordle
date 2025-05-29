import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";


const HomeLeft = () => {
    return (
        <div className={styles.left}>
            <Link href="/cybercity">
                <img
                    className={styles.background}
                    src="/images/cybercity-bg.jpg"
                    alt=""
                />
                <img
                    className={styles.leftLogo}
                    src="/images/set-14-logo.png"
                    alt=""
                />
            </Link>
        </div>
    )
}

export default HomeLeft