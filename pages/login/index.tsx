import styles from "../../styles/Login.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faLock);

function PageLogin() {
  return (
    <main className={styles.mainLogin}>
      <section className={styles.boxLogin}>
        <h1>Login</h1>
        <form>
          <div className={styles.wrapper}>
            <FontAwesomeIcon icon={faUser} />
            <input type="name" name="name" id="name" placeholder="username" />
          </div>

          <div className={styles.wrapper}>
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default PageLogin;
