import styles from '../header.module.scss'
import { Link } from "react-router";

import teaCup from '../../../assets/img/tea-cup.svg'

export default function LogoBtn(props){
    return (
        <Link 
            to='/'
            className={styles.logo__div}
        >
            <img src={teaCup} alt="лого" />
            <span>dailyTea</span>
        </Link>
    )
}