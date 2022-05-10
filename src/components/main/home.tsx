/* eslint-disable @next/next/no-img-element */
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import styles from './styles.module.scss'

interface HomeProps {
    title: String;
    who: String;
    writer: String;
}

export function Home({title, who, writer}: HomeProps) {
    return (
        <>
             <section className={styles.main}>
                <div className={styles.grid_layout}>
                    <div className={styles.here} data-aos="zoom-in">
                        <div className={styles.text_ani}>
                            <span>{who},</span> <br />
                            <h2>{title}</h2>
                        </div>
                        <div className={styles.writer}>
                            <h3 className={styles.typewriter}>{writer}</h3>
                        </div>
                        <div className={styles.react}>
                            <a href="https://github.com/slaidezera">
                                 <AiFillGithub  className={styles.git}/>
                            </a>
                            <a href="https://www.instagram.com/nelis_code/">
                                <AiFillInstagram className={styles.inst}/>
                            </a>
                            <a href="">
                                <FaDiscord className={styles.discord} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.image} data-aos="fade-left">
                        <img src="/assets/image/logo.svg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
