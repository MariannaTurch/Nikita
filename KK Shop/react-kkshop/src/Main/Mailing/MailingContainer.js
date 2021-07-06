import React from 'react'
import styles from './Mailing.module.css'

export default function MailingContainer() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Подпишитесь на рассылку</span>
            <span className={styles.description}>Узнай первым о старте скидок и специальных предложений!</span>
            <input className={styles.email}type="email" id="email" name="email"/>
            <input className={styles.submit} type="submit" value="Подписаться"/>
        </div>
    )}