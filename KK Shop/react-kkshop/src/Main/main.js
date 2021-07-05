import React from 'react'
import BannerMain from "./BannerMain/BannerMain";
import Banner2Main from "./Banner2Main/Banner2Main";
import Advantage from "./Advantage/Advantage.js";
import NewProducts from "./NewProducts/NewProducts.js";
import styles from './StyleMain.module.css'


export default function Main() {
    const newProducts= [
        {id: 1, sell: false, title: 'Slimming Gel Body', description: 'Гель для тела для похудения', price: '2 480'},
        {id: 1, sell: false, title: 'Slimming Gel Body', description: 'Гель для тела для похудения', price: '2 480'},
        {id: 1, sell: false, title: 'Slimming Gel Body', description: 'Гель для тела для похудения', price: '2 480'},
        {id: 1, sell: false, title: 'Slimming Gel Body', description: 'Гель для тела для похудения', price: '2 480'}
    ]
    return(
        <main>
            <BannerMain></BannerMain>,
            <Banner2Main></Banner2Main>,
            <Advantage></Advantage>,
            <h2>Новинки</h2>,
            <h2>Акционные товары</h2>,
            <h2>Рекомендуемые товары</h2>,

        </main>

    )
}