import styles from "../../styles/components/boxJob.module.scss";

export default function BoxJob() {
  return (
    <>
      <ul className={styles.boxList}>
        <li className={styles.detailsItem}>
          <details>
            <summary>
              <h3>Titulo</h3>
            </summary>
            <div>
              <p>Detalhes</p>
            </div>
          </details>
        </li>

        <li className={styles.detailsItem}>
          <details>
            <summary>
              <h3>Titulo</h3>
            </summary>
            <div>
              <p>Detalhes</p>
            </div>
          </details>
        </li>

        <li className={styles.detailsItem}>
          <details>
            <summary>
              <h3>Titulo</h3>
            </summary>
            <div>
              <p>Detalhes</p>
            </div>
          </details>
        </li>
      </ul>
    </>
  );
}
