/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Text } from "@mantine/core";
import { BoardProvider } from "../../context/BoardContext";
import HomeLeft from "../../components/HomeLeft";
import HomeRight from "../../components/HomeRight";

const Home = () => {
  const { router } = useRouter();

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Text size="xl" align="center">
          Pick a set to start
        </Text>
      </div>
      <HomeLeft />
      
      <HomeRight />
      <div className={styles.disclaimer}>
        <Text color="#888" size="sm">
          This website is a fan-made project and is not affiliated with,
          endorsed by, or sponsored by Riot Games or Teamfight Tactics. All
          trademarks are property of their respective owners. No copyright
          infringement is intended.
        </Text>
      </div>
    </div>
  );
};

export default Home;
