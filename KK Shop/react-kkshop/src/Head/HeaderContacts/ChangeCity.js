import React from 'react'
import styles from './HeaderContacts.module.css'

export default function ChangeCity() {
    return(
        <div className={styles.citymenu}>
            <input className={styles.menu_checkbox} type="checkbox"/>
            <label></label>

            <nav className={styles.menu}>
                <li>
                <svg className={styles.flagRF} width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="27.5" height="19.5" fill="white" stroke="#F5F5F5" stroke-width="0.5"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                        <rect x="0.25" y="0.25" width="27.5" height="19.5" fill="white" stroke="white" stroke-width="0.5"/>
                    </mask>
                    <g mask="url(#mask0)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3334H28V6.66669H0V13.3334Z" fill="#0C47B7"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"/>
                    </g>
                </svg>
                    Россия
                </li>
                <li><input className={styles.menu_text} value={"Найти Город"} type="text"/></li>
                <li className={styles.text}>
                    Вы можете выбрать <b> более 150 000 </b> населённых пунктов по<br/>всей Российской Федерации.
                </li>
                <li className={styles.list}>
                    <a>Москва</a><a>Екатеринбург</a><a>Санкт-Петербург</a><a>Новосибирск</a><a>Казань</a><a>Самара</a><a>Ростов-на-Дону</a><a>Челябинск</a><a>Хабаровск</a><a>Саратов</a><a>Хабаровск</a><a>Волгоград</a>
                </li>
            </nav>
        </div>
)
}

