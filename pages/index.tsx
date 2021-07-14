import Head from "next/head";
import { useContext } from "react";
import { AuthContext } from "../src/contexts/AuthContext";
import styles from "../styles/Home.module.scss";
import BoxJob from "./components/boxJob";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <header className={styles.container}>
        <Head>
          <title>Dashboard By: Caio Figueiredo</title>
        </Head>

        <h1 className={styles.title}>
          Olá, <span>{user?.name}</span>
        </h1>

        <h2>Listagem de tarefas</h2>
      </header>

      <main className={styles.main}>
        <section className={styles.list}>
          <BoxJob />
        </section>
      </main>
    </>
  );
}
