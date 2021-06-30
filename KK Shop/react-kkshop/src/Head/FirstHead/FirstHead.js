import React from 'react'
import styles from './FirstHead.module.css'

export default function FirstHead() {
   return(
       <ul className={styles.ul}>
          <li className={styles.city}>Санкт-Петербург</li>
          <li className={styles.phonenumber}>8 495 259 25 00</li>
       </ul>
   )
}