import styles from "../../styles/Login.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../src/contexts/AuthContext";

library.add(faUser, faLock);

interface loginUser {
  email: string;
  password: string;
}

function PageLogin() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: loginUser) {
    await signIn(data);
  }

  return (
    <main className={styles.mainLogin}>
      <section className={styles.boxLogin}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className={styles.wrapper}>
            <FontAwesomeIcon icon={faUser} />
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>

          <div className={styles.wrapper}>
            <FontAwesomeIcon icon={faLock} />
            <input
              {...register("password")}
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
