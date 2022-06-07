
import { Button } from '../components/button'
import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <div className={styles.content_description}>
          <h2 className={styles.description_mobile}>O café que fará seu código decolar para
            <br></br>o próximo nível.
          </h2>
          <Button />
        </div>
        <h1>Great Coffee</h1>
        <h1>&lt;Great Code/&gt;</h1>
      </div>

      <img src="/assets/rocket-coffee.png" alt="Rocket-coffe" />

      <div className={`${styles.blur} ${styles.right}`}></div>
      <div className={`${styles.blur} ${styles.left}`}></div>
    </main>
  )
}
