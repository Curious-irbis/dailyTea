import styles from './sideMenu.module.scss'
import SideButton from './button'

import card from '../../../assets/img/services/sideCard.svg'
import desert from '../../../assets/img/services/sideDeserts.svg'
import food from '../../../assets/img/services/sideFood.svg'
import tea from '../../../assets/img/services/sideTea.svg'

interface itemType{
    title: string,
    cName: string,
    innerName: string,
    src: string
}

export default function SideMenu(props){
    const sideItems: itemType[] = [
        {
            title: 'tea',
            cName: styles.side_button,
            innerName: 'Чаи',
            src: tea
        },
        {
            title: 'food',
            cName: styles.side_button,
            innerName: 'Еда',
            src: food
        },
        {
            title: 'deserts',
            cName: styles.side_button,
            innerName: 'Десерты',
            src: desert
        },
        {
            title: 'card',
            cName: styles.side_button,
            innerName: 'Корзина',
            src: card
        }
    ];

    const menu_items = sideItems.map(item => 
        <SideButton
            title={item.title}
            cName={item.cName}
            imgSrc={item.src}
        >
            {item.innerName}
        </SideButton>
    )

    return(
        <div className={styles.side_bar}>
            <span className={styles.side_header}>Категории</span>
            <br />
            <div
                className={styles.side_menu}
            >
                {menu_items}
            </div>
        </div>
    )
}