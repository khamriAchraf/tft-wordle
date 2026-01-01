import Head from 'next/head'
import React from 'react'
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";
import Set16LevelsBackground from '../../../../components/Set16LevelsBackground';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>TFTYK | Lore & Legends</title>
            </Head>
            <main
                className={`${styles.main} ${geistSans.variable} ${geistMono.variable}`}
            >
                <Set16LevelsBackground />
            </main>
        </React.Fragment>
    )
}

export default index