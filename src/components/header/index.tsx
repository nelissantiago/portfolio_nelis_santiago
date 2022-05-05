/* eslint-disable @next/next/no-html-link-for-pages */

/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Header() {

     return (
        <>
            <header className={styles.header}>

                <div className={styles.grid_layout}>
                    <img className={styles.img} src="/assets/image/Nelis_header.png" 
                            alt=""
                            width="220px"
                            height='auto' 
                    />
                    <nav className={styles.nav}>
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="1500">
                                <a className={styles.link} href="/#about_me">Inicio</a>
                            </li>

                            <li data-aos="fade-up" data-aos-duration="2500">
                                <a  className={styles.link} href="/#projects">Projetos</a>
                            </li>

                            <li data-aos="fade-up" data-aos-duration="2800">
                                <a  className={styles.link} href="/#services">Serviços</a>
                            </li>

                        </ul>
                    </nav>

                </div>
                
            </header>
        </>
    )
}

