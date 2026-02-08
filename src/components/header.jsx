import styles from '../styles/header.module.scss'
import teaCup from '../assets/img/tea-cup.svg'
import news from '../assets/img/news.svg'
import ring from '../assets/img/ring.svg'
import loupe from '../assets/img/loupe.svg'


export default function Header(props){
    return (
        <header className={styles.header_style}>
            <div className={styles.logo__div}>
                <img src={teaCup} alt="лого" />
                <span>dailyTea</span>
            </div>
            <nav className={styles.nav__div}>
                <button className={styles.nav__component}>
                    <img src={news} alt="новости" />
                    <span>Новости</span>
                </button>
                <button className={styles.nav__component}>
                    <img src={ring} alt="колокольчик" />
                    <span>Вызов официанта</span>
                </button>
                <button className={styles.nav__component}>
                    <img src={loupe} alt="лупа" />
                    <span>Поиск</span>
                </button>
            </nav>
        </header>
    )
}