import React from 'react'
import styles from './HeaderMenu.module.css'
import IconHead from "./IconHead/IconHead";
import img from "./logo.png";

export default function HeaderMenu() {
    return(
        <div className={styles.secondhead}>
            <div>
            <ul className={styles.ul}>
                <img className={styles.img} src={img}/>
                <li className={styles.li}>Каталог</li>
                <li className={styles.li}>Клуб косметологов</li>
                <li className={styles.li}>Сертификаты</li>
                <li className={styles.li}>Доставка и Оплата</li>
                <li className={styles.li}>Конакты</li>
                <li className={styles.li}>Блог</li>
            </ul></div>
            <IconHead></IconHead>
        </div>
)

}