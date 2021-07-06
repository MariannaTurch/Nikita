import React from 'react'
import styles from './NewProducts.module.css'
import ProductItem from "./ProductItem.js";

export default function NewProducts(props) {
    return(
        <div className={styles.newproducts_container}>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        </div>
    )
}