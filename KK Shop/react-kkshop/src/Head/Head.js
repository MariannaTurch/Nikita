import React from 'react'
import styles from './StyleHead.module.css'
import FirstHead from "./FirstHead/FirstHead";
import SecondHead from "./SecondHead/SecondHead";

export default function Header() {
    return(
        <div>
            <FirstHead></FirstHead>
            <SecondHead></SecondHead>
        </div>

    )
}