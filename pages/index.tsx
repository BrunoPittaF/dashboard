import Head from "next/head";
import styles from "../styles/Home.module.scss";
import BoxJob from "./components/boxJob";

export default function Home() {
  return (
    <>
      <header className={styles.container}>
        <Head>
          <title>Dashboard By: Caio Figueiredo</title>
        </Head>

        <h1 className={styles.title}>Listagem</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.list}>
          <BoxJob />
        </section>
      </main>
    </>
  );
}
