// этот файл отвечает за товары на странице
import styles from './catalog.module.scss'

import { useState } from "react"

interface itemInterface{
    title: string,
    img: string,
    description: string,
    price: number
}


export default function Catalog({pName, children}){
    const title = useState(pName)
    let tea_list_li = 
    <div>
        <h3>Здесь, пока, ничего нет</h3>
    </div>;

    if(children){
        tea_list_li = children.map((item: itemInterface) => {
            return(
                <div className={styles.container}>
                    <div className={styles.imgTitle}>
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                    </div>
                    <div className={styles.priceDesc}>
                        <span>Цена: {item.price}₽</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            )
        })

        // document.getElementsByClassName('container').forEach()
    }



    return (
        <div className={styles.main_container}>
            <h2>{title}</h2>
            <div className={styles.list_container}>
                {tea_list_li}
            </div>
        </div>
    )
}