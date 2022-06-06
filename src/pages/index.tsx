
import styles from './home.module.scss'
 
export default function Home(){
  return (
    <main className={styles.container}>
        <div className={styles.title}>
            <h1>Great Coffee</h1>
            <h1>&lt;Great Code/&gt;</h1>
        </div>

        <img src="/assets/rocket-coffee.png" alt="Rocket-coffe" />

        <div className={`${styles.blur} ${styles.right}`}></div>
        <div className={`${styles.blur} ${styles.left}`}></div>
    </main>
  )
}
