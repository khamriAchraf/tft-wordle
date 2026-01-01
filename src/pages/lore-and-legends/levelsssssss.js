import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Levels.module.css";
import compositions from "../../../data/lore-and-legends/comps";
import { Container, Title, Grid, Card, Badge } from "@mantine/core";

export default function Levels() {
  return (
    <>
      <Head>
        <title>TFTYK | Lore & Legends - Levels</title>
      </Head>
      <main className={styles.main}>
        <Container size="lg" py="xl">
          <Title order={1} align="center" mb="xl">
            Lore & Legends - All Puzzles
          </Title>
          <Grid>
            {compositions.map((comp, index) => (
              <Grid.Col key={comp.id} xs={12} sm={6} md={4} lg={3}>
                <Link href={`/lore-and-legends/puzzle/${comp.id}`}>
                  <Card
                    className={styles.puzzleCard}
                    shadow="md"
                    p="lg"
                    radius="md"
                    withBorder
                  >
                    <Card.Section withBorder inheritPadding py="md">
                      <div className={styles.cardHeader}>
                        <Badge size="lg" variant="filled">
                          #{index + 1}
                        </Badge>
                      </div>
                    </Card.Section>

                    <div className={styles.cardContent}>
                      <h3 className={styles.compName}>{comp.name}</h3>
                      <p className={styles.unitCount}>
                        {comp.units.length} Units
                      </p>
                    </div>
                  </Card>
                </Link>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
