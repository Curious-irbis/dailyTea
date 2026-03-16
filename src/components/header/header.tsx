import styles from './header.module.scss'

import news from '../../assets/img/news.svg'
import ring from '../../assets/img/ring.svg'
import loupe from '../../assets/img/loupe.svg'

import BtnLink from './header.components/btnLink'
import AlertButton from './header.components/alertButton'
import SearchBtn from './header.components/searchBtn'
import LogoBtn from './header.components/logoBtn'
import { useState } from 'react'

export default function Header({searchQuery, setSearchQuery}){
    // const [productsList, setProductsList] = useState(props.list)
    // const [searchQuery] = useState(props.searchQuery)

    return (
        <header className={styles.header_style}>
            <LogoBtn />
            <nav className={styles.nav__div}>
                <BtnLink 
                    linK="news"
                    imgSrc={news}
                    cName={styles.nav__component}
                    title="Новости"
                />
                <AlertButton 
                    title="Вызов официанта"
                    imgSrc={ring}
                    cName={styles.nav__component}
                />
                <SearchBtn 
                    imgAlt="Поиск"
                    imgSrc={loupe}
                    cName={styles.nav__component}
                    // searchList={productsList}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </nav>
        </header>
    )
}