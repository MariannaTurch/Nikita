import React from 'react'
import styles from './StyleHead.module.css'
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

export default function Header() {
    return(
        <div>
            <HeaderContacts></HeaderContacts>
            <HeaderMenu></HeaderMenu>
        </div>

    )
}