import React from 'react'
import styles from './SecondHead.module.css'
import IconHead from "./IconHead/IconHead";
import img from "./logo.png";

export default function SecondHead() {
    return(
        <div className={styles.secondhead}>
            <ul className={styles.ul}>
                <img src={img}/>
                <li className={styles.li}>Каталог</li>
                <li className={styles.li}>Клуб косметологов</li>
                <li className={styles.li}>Сертификаты</li>
                <li className={styles.li}>Доставка и Оплата</li>
                <li className={styles.li}>Конакты</li>
                <li className={styles.li}>Блог</li>
            </ul>
            <IconHead></IconHead>
        </div>
)

}