import { useRef } from 'react';
import { Button } from '../button';
import styles from './styles.module.scss';

export function Header(){
    const header_ref = useRef(null);
    const overlay_ref = useRef<any>(null);
    return(
        <header className={styles.container} ref={header_ref}>
            <img 
                className={styles.desktop} 
                src="/assets/logo-desktop.svg" 
                alt="Logo Rocketseat" />
         
            <img 
                className={styles.mobile} 
                src="/assets/logo-mobile.svg" 
                alt="Logo Rocketseat" 
            
            />

            <nav className={styles.nav_desktop}>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Recompensas</a></li>
                    <li><a>Gift Cards</a></li>
                    <li><a>Lojas</a></li>
                </ul>
            </nav>

            <nav className={styles.nav_mobile}>
                <div className={`overlay`} ref={overlay_ref}>
                </div>
                    <ul className="ul_mobile">
                        <li className={styles.active}><a>Home</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Recompensas</a></li>
                        <li><a>Gift Cards</a></li>
                        <li><a>Lojas</a></li>
                    </ul>
            </nav>

            <Button />

            <img 
                className={styles.menu_hamburguer} 
                src="/assets/menu-buguer-open.svg" 
                alt="menu hamburguer" 
                onClick={() => {
                    overlay_ref.current?.classList.toggle('active');
                }}
            />
        </header>
    )
}