import styles from './styles.module.scss'

interface TextWhoIamProps {
    title: String;
    textContainer: String;
}

export function TextWhoIam({title, textContainer} : TextWhoIamProps) {
    return (
        <>
              
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
                    <h2 data-aos="fade-down"  data-aos-duration="2000">{title}<span>.</span></h2>
                    <p data-aos="fade-down"  data-aos-duration="1500">
                        {textContainer}
                    </p>
                    </div>
                </div>
            </section>  
        </>
    )
}