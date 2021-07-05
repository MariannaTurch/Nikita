import React from 'react'
import styles from './NewProducts.module.css'
import ProductItem from "./ProductItem.js";

export default function NewProducts(props) {
    return(
        <div className={styles.newproduct_container}>
            {props.newProducts.map(products => {
            return (<ProductItem products={products}/>)
            })
            }
        </div>
    )
}