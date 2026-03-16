// этот файл отвечает за товары на странице
import styles from './catalog.module.scss'

import { useState } from "react"

interface itemInterface{
    title: string,
    img: string,
    description: string,
    price: number
}


export default function Catalog({pName, searchQuery, listToRender}){
    const title = useState(pName)
    let filteredList = [];
    let tea_list_li = 
    <div>
        <h3>Здесь, пока, ничего нет</h3>
    </div>;
    


    if(listToRender){
        filteredList = listToRender.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )

        tea_list_li = filteredList.map((item: itemInterface) => {
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
        return (
            <div className={styles.main_container}>
                <h2>{title}</h2>
                <div className={styles.list_container}>
                    {filteredList.length > 0 ? (tea_list_li) : (<h3>Товары не найдены</h3>)} 
                </div>
            </div>
        )
    }else {
        return (
            <div className={styles.main_container}>
                <h2>{title}</h2>
                <div className={styles.list_container}>
                    {tea_list_li}
                </div>
            </div>
        )
    }
}