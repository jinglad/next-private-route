import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Link href="/profile">
          <a>Profile Page</a>
        </Link>
      </div>
      <div className={styles.button}>
        <Link href="/dashboard">
          <a>Dashboard Page</a>
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
