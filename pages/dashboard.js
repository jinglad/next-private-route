import Link from "next/link";
import styles from "../styles/Home.module.css";

const dashboard = () => {
  return (
    <div>
      <h1>this is dashboard page</h1>
      <div className={styles.button}>
      <Link href="/profile">
          <a>Profile Page</a>
        </Link>
      </div>
      <div className={styles.button}>
        <Link href="/login">
          <a>Login Page</a>
        </Link>
      </div>
    </div>
  )
}

export default dashboard;