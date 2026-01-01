/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Text } from "@mantine/core";
import { BoardProvider } from "../../context/BoardContext";
import HomeLeft from "../../components/HomeLeft";
import HomeCenter from "../../components/HomeCenter";
import HomeRight from "../../components/HomeRight";
import HomeSection4 from "../../components/HomeSection4";

const Home = () => {
  const { router } = useRouter();
  const [expandedSet, setExpandedSet] = React.useState(null);

  const handleSetClick = (setName) => {
    setExpandedSet(expandedSet === setName ? null : setName);
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Text size="xl" align="center">
          Welcome to TFTYK, Pick a set to start
        </Text>
      </div>
      <div className={expandedSet === 'lore-and-legends' ? styles.sectionLarge + ' ' + styles.expanded : styles.sectionLarge}>
        <HomeSection4 isExpanded={expandedSet === 'lore-and-legends'} onClick={() => handleSetClick('lore-and-legends')} />
      </div>
      <div className={expandedSet === 'ko-coliseum' ? styles.section + ' ' + styles.expanded : styles.section}>
        <HomeLeft isExpanded={expandedSet === 'ko-coliseum'} onClick={() => handleSetClick('ko-coliseum')} />

      </div>
      <div className={expandedSet === 'cybercity' ? styles.section + ' ' + styles.expanded : styles.section}>
        <HomeCenter isExpanded={expandedSet === 'cybercity'} onClick={() => handleSetClick('cybercity')} />

      </div>
      <div className={expandedSet === 'remix-rumble' ? styles.section + ' ' + styles.expanded : styles.section}>
        <HomeRight isExpanded={expandedSet === 'remix-rumble'} onClick={() => handleSetClick('remix-rumble')} />

      </div>
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
