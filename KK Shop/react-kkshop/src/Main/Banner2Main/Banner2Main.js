import React from 'react';
import styles from './Banner2Main.module.css';
import img from './Banner2Main.png';

export default function Banner2Main() {
    return(
        <div className={styles.banner}>
            <img className={styles.img}src={img}/>
            <p className={styles.text}>
                <span className={styles.title1}>Ведущий эксперт на российском рынке профессиональной косметики из Кореи—ККshop™</span>
                <span className={styles.title2}>Мы делаем мир профессиональной корейской косметики доступным для каждого косметолога в России, предоставляя возможность работать с лучшими достижениями корейских учёных и специалистов в области сохранения здоровья и ухода за кожей</span>
                <a className={styles.title3}>Подробнее</a>
            </p>
        </div>
    )
}