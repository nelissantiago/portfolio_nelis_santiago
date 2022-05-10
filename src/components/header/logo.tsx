/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Logo() {
    return (
        <>
            <img 
            className={styles.img} 
            src="/assets/image/Nelis_header.png"
            alt="logo_nelissantiago"
            width="220px"
            height='auto' 
            />
        </>
    )
}