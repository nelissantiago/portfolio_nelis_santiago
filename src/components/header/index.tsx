/* eslint-disable @next/next/no-html-link-for-pages */

/* eslint-disable @next/next/no-img-element */
import { Logo } from './logo'
import { Navegation } from './navegation'
import styles from './styles.module.scss'

export function Header() {

     return (
        <>
            <header className={styles.header}>

                <div className={styles.grid_layout}>
                    <Logo />
                   <Navegation />
                </div>
                
            </header>
        </>
    )
}

