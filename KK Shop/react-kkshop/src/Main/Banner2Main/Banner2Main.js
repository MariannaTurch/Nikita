import React from 'react';
import styles from './Banner2Main.module.css';
import img from './Banner2Main.png';

export default function Banner2Main() {
    return(
        <div className={styles.banner}>
            <img className={styles.img}src={img}/>
            <p className={styles.text}>
                <span className={styles.title1}>Ведущий эксперт на российском рынке<br/>профессиональной косметики<br/>из Кореи—ККshop™</span>
                <span className={styles.title2}>Мы делаем мир профессиональной корейской косметики доступным<br/>для каждого косметолога в России, предоставляя возможность работать<br/>с лучшими достижениями корейских учёных и специалистов в области<br/>сохранения здоровья и ухода за кожей</span>
                <a className={styles.title3}>Подробнее
                    <svg className={styles.svg} width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6L14 3L11 0L10.293 0.707L12.086 2.5H0V3.5H12.086L10.293 5.293L11 6Z" fill="#CC4C6E"/>
                    </svg>
                </a>
            </p>
        </div>
    )
}