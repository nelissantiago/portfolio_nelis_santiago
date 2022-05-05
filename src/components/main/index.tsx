/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

export function Main() {
    return (
        <>
            <section className={styles.main}>
                <div className={styles.grid_layout}>
                    <div className={styles.here} data-aos="zoom-in">
                        <div className={styles.text_ani}>
                            <span>Olá, eu sou,</span> <br />
                            <h2>Nelis Santiago</h2>
                        </div>
                        <div className={styles.writer}>
                            <h3 className={styles.typewriter}>Front-End Developer.</h3>
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

            <main>
                
            <section className={styles.section} id='about_me'>
                <div className={styles.grid}>
                   <div className={styles.slid} data-aos="fade-right"  data-aos-duration="1500">
                   <div className={styles.slider_box}>
                        <div className={styles.slider}>
                            <div className={styles.slide} id={styles.x}></div>
                            <div className={styles.slide} id={styles.y}></div>
                            <div className={styles.slide} id={styles.z}></div>
                        </div>
                    </div>
                   </div>
                   <div className={styles.textContainer}>
                    <h2 data-aos="fade-down"  data-aos-duration="2000">Quem Sou <span>.</span></h2>
                    <p data-aos="fade-down"  data-aos-duration="1500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eos velit, odit ad perspiciatis, harum placeat, aliquid iste quia ullam voluptas inventore reprehenderit atque. Totam saepe minus consectetur nobis odio.
                    </p>
                    </div>
                </div>
            </section>

            <section className={styles.project} id='projects'>
              <div className={styles.layout}>
              <h2 data-aos="fade-down">Projetos<span>.</span></h2>
             <div className={styles.projects}>
            <article className={styles.list_project} data-aos="fade-down"  data-aos-duration="1500">
                <h3>Em Breve...</h3>
                <p>
                    Pegue o café e espere um momento, estou desenvolvendo o projeto.
                </p>
            </article>
            <article className={styles.list_project} data-aos="fade-down"  data-aos-duration="2000">
                <h3>Em Breve...</h3>
                <p>
                    Pegue o café e espere um momento, estou desenvolvendo o projeto.
                </p>
            </article>
            <article className={styles.list_project} data-aos="fade-down"  data-aos-duration="2500">
                <h3>Em Breve...</h3>
                    <p>
                        Pegue o café e espere um momento, estou desenvolvendo o projeto.
                    </p>
            </article>
             </div>
                </div>
            </section>

            <section className={styles.service} id='services'>
                <div className={styles.layout}>
                    <h2 data-aos="fade-down">Servicos<span>.</span></h2>
                    <div className={styles.services}>
                        <article className={styles.list_service} data-aos="fade-down"  data-aos-duration="1000">
                            <img 
                            src="/assets/image/icon_service.arq.svg" 
                            alt="logo_arq" 
                            />
                            <h3>Desenvolvimento</h3>
                            <p>
                                Desenvolvo sites profisionais, portfolios, blogs, hospedagem, minecraft, etc... 
                            </p>
                        </article>
                        <article className={styles.list_service} data-aos="fade-down"  data-aos-duration="2000">
                            <img 
                            src="/assets/image/icon_service.mot.svg" 
                            alt="" 
                            />
                            <h3>TypeScript</h3>
                            <p>
                                Desenvolvo de forma clara que seja, profisional é que nossos clientes fiquem satisfeitos. 
                            </p>
                        </article>
                        <article className={styles.list_service} data-aos="fade-down"  data-aos-duration="3000">
                            <img 
                            src="/assets/image/icon_service.svg" 
                            alt="" 
                            />
                            <h3>Codigo</h3>
                            <p>
                               Meu objetivo é sempre deixa um codigo-limpo é perfeito, é sempre fazer um site otimizado para nossos clientes.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            </main>
        </>
    )
}