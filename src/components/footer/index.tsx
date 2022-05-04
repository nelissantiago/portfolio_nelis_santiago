/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
export function Footer() {
    return (
        <>
            <footer className={styles.footer} id='#footer'>
                <div className={styles.grid}>
                    <div className={styles.footerContent}>
                        <span>© 2022 Nelis Santiago</span>
                        <div className={styles.powed}>
                            <p>
                                Powered by
                            </p>
                            <img 
                            src="/assets/image/footer.svg" 
                            alt="" 
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}