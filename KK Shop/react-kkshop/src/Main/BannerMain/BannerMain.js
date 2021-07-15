import React from 'react'
import styles from './BannerMain.module.css'


export default function BannerMain() {
    return(
        <div className={styles.banner}>

            <span className={styles.skindom}>SKINDOM</span>
            <span className={styles.text}>Специальные цены только до 30 апреля</span>
            <button className={styles.button}>Перейти в каталог &#129042;</button>

        </div>
    )
}