import styles from '../styles/header.module.scss'
import teaCup from '../assets/img/tea-cup.svg'
import news from '../assets/img/news.svg'
import ring from '../assets/img/ring.svg'
import loupe from '../assets/img/loupe.svg'

function AlertButton({title, imgSrc, cName}){
    return(
        <button 
            className={cName}
            onClick={() => alert(title)}
        >
            <img src={imgSrc} alt={title} />
            <span>{title}</span>
        </button>
    )
}

export default function Header(props){
    return (
        <header className={styles.header_style}>
            <div className={styles.logo__div}>
                <img src={teaCup} alt="лого" />
                <span>dailyTea</span>
            </div>
            <nav className={styles.nav__div}>
                <AlertButton 
                    title="Новости"
                    imgSrc={news}
                    cName={styles.nav__component}
                />
                <AlertButton 
                    title="Вызов официанта"
                    imgSrc={ring}
                    cName={styles.nav__component}
                />
                <AlertButton 
                    title="Поиск"
                    imgSrc={loupe}
                    cName={styles.nav__component}
                />
            </nav>
        </header>
    )
}