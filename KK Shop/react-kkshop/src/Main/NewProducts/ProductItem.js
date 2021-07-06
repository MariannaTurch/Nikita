import React from 'react'
import styles from './NewProducts.module.css'
import img from './product1.png'

export default function ProductItem() {
return (
    <div className={styles.newproduct_container}>
    <img src={img}/>
    <span className={styles.newproduct_title}>Slimming Gel Body</span>
    <span className={styles.newproduct_des}>Гель для тела для похудения</span>
    <span className={styles.newproduct_price} >2 480 руб</span>
    </div>
)
}