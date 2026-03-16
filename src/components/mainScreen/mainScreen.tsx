// этот экран отвечает за соединение бокового меню и каталога

import styles from './mainScreen.module.scss'

import { useState } from "react";
import Catalog from "./catalog.Components/catalog";
import SideMenu from "./side.Components/sideMenu";

export default function MainScreen({text, searchQuery, list}){
    const title = useState(text)

    return (
        <div className={styles.main_screen}>
            <SideMenu />
            <Catalog 
                pName={title}
                searchQuery={searchQuery}
                listToRender={list}
            />
        </div>
    )
}