import styles from './styles.module.scss'

interface ProjectProps {
    projectText: String;
    projectContainerText: String;
    title: String;

}
export function Project({ projectText, projectContainerText, title }:ProjectProps) {
    return (
        <>
            <section className={styles.project} id='projects'>
                <div className={styles.layout}>
                  <h2 data-aos="fade-down">{title}<span>.</span></h2>
                    <div className={styles.projects}>
                        <article className={styles.list_project} data-aos="fade-down"  data-aos-duration="1500">
                            <h3>{projectContainerText}</h3>
                            <p>
                                {projectText}
                            </p>
                        </article>
                        <article className={styles.list_project} data-aos="fade-down"  data-aos-duration="2000">
                            <h3>{projectContainerText}</h3>
                            <p>
                                {projectText}
                            </p>
                        </article>
                        <article className={styles.list_project} data-aos="fade-down"  data-aos-duration="2500">
                            <h3>{projectContainerText}</h3>
                                <p>
                                    {projectText}
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
 * Pegue o café e espere um momento, estou desenvolvendo o projeto.
 * 
 */