/* eslint-disable @next/next/no-img-element */
import { text } from 'node:stream/consumers';
import styles from './styles.module.scss'

interface ServiceProps {
title: String;

TitleCard: String;
textContainerCard: String;

TitleCardTwo: String;
textContainerCardTwo: String;

TitleCardTheree: String;
textContainerCardTheree: String;
}

export function Service({ title, TitleCard, textContainerCard, TitleCardTwo, textContainerCardTwo, TitleCardTheree, textContainerCardTheree }: ServiceProps) {
    return (
        <>
           <section className={styles.service} id='services'>
                <div className={styles.layout}>
                    <h2 data-aos="fade-down">{title}<span>.</span></h2>
                    <div className={styles.services}>
                        <article className={styles.list_service} data-aos="fade-down"  data-aos-duration="1000">
                            <img 
                            src="/assets/image/icon_service.arq.svg" 
                            alt="logo_arq" 
                            />
                            <h3>{TitleCard}</h3>
                            <p>
                                {textContainerCard}
                            </p>
                        </article>
                        <article className={styles.list_service} data-aos="fade-down"  data-aos-duration="2000">
                            <img 
                            src="/assets/image/icon_service.mot.svg" 
                            alt="" 
                            />
                            <h3>{TitleCardTwo}</h3>
                            <p>
                            {textContainerCardTwo}
                            </p>
                        </article>
                        <article className={styles.list_service} data-aos="fade-down"  data-aos-duration="3000">
                            <img 
                            src="/assets/image/icon_service.svg" 
                            alt="" 
                            />
                            <h3>{TitleCardTheree}</h3>
                            <p>
                            {textContainerCardTheree}
                            </p>
                        </article>
                    </div>
                </div>
            </section> 
        </>
    )
}

/**
 * 
 *  serviceContainerTextu={"Desenvolvimento"} textContainerCardu={"Desenvolvo sites profisionais, portfolios, blogs, hospedagem, minecraft, etc..."} serviceContainerTexttwo={"Typescript"} textContainerCardtwo={"Desenvolvo de forma clara que seja, profisional é que nossos clientes fiquem satisfeitos." && "Desenvolvo de forma clara que seja, profisional é que nossos clientes fiquem satisfeitos."} serviceContainerTexttheree={"Mobile"} textContainerCardtheree={""
 * 
 */