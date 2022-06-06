import styles from './styles.module.scss';

export function Header(){
    return(
        <header className={styles.container}>
            <img src="/assets/logo-desktop.svg" alt="Logo Rocketseat" />
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Recompensas</a></li>
                    <li><a>Gift Cards</a></li>
                    <li><a>Lojas</a></li>
                </ul>
            </nav>

            <button>
                Pegar meu Café
            </button>
        </header>
    )
}