/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

interface knowledgeProps {
title: String;
}

export function KnowledgeMy({ title }: knowledgeProps) {
    return (
        <>
         <section className={styles.content}>
                <div className={styles.conhecimentos}>
                    <h3>{title}<span>.</span></h3>

                    <div className={styles.Content_List}>
                        <article className={styles.list_conhe}>
                            <img src="/assets/icons/html.svg" data-aos="fade-down" alt=""/>
                        </article>
                        <article className={styles.list_conhe}>
                            <img src="/assets/icons/css.svg" data-aos="fade-down"  alt="" />
                        </article>
                        <article className={styles.list_conhe}>
                            <img src="/assets/icons/js.svg" data-aos="fade-down" alt="" />
                        </article>
                        <article className={styles.list_conhe}>
                            <img src="/assets/icons/sass.svg" data-aos="fade-down"  alt="" />
                        </article>
                        <article className={styles.list_conhe}>
                            <img src="/assets/icons/react.svg" data-aos="fade-down"  alt="" />
                        </article>
                        <article className={styles.list_conhe}>
                            <img src="/assets/icons/next.svg" data-aos="fade-down" alt="" />
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}