import React from 'react'
import BannerMain from "./BannerMain/BannerMain";
import Banner2Main from "./Banner2Main/Banner2Main";
import styles from './StyleMain.module.css'

export default function Main() {
    return(
        <main>
            <BannerMain></BannerMain>
            <Banner2Main></Banner2Main>
        </main>

    )
}