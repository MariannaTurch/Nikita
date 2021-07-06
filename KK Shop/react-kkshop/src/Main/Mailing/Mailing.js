import React from 'react'
import styles from './Mailing.module.css'
import img from './Mailing.png'
import MailingContainer from "./MailingContainer";

export default function Mailing() {
    return (
       <div className={styles.mailing}>
           <img className={styles.img} src={img}/>
           <MailingContainer></MailingContainer>
       </div>
    )
}