import React from 'react'
import styles from './HeaderContacts.module.css'

export default function HeaderContacts() {
   return(
       <ul className={styles.ul}>
          <li className={styles.city}>Санкт-Петербург
              <svg className={styles.svg} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.99984 5.47534L9.0065 1.46866L8.0645 0.52533L4.99984 3.592L1.93583 0.52533L0.993164 1.468L4.99984 5.47534Z" fill="#F7B0C3"/>
              </svg>
          </li>
          <li className={styles.phonenumber}>8 495 259 25 00</li>
       </ul>
   )
}