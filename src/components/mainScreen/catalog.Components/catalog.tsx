// этот файл отвечает за товары на странице
import styles from './catalog.module.scss'

import { useState } from "react"
import { JSX } from 'react'
import toast from 'react-hot-toast'

interface itemInterface{
    title: string,
    img: string,
    description: string,
    price: number
}


export default function Catalog({pName, searchQuery, listToRender}){
    const title = useState(pName)
    let filteredList = [];
    let catalog_list_li: JSX.Element = (
        <div>
            <h3>Здесь, пока, ничего нет</h3>
        </div>
    );

    function handleAddToCard(e){
        try{
            toast(`Блюдо - ${e.target.parentNode.firstElementChild.lastElementChild.innerText} добавлено в корзину`, {
                duration: 1500,

                style: {
                    color: 'beige',
                    backgroundColor: 'darkorange'
                },

                icon: '✅'
            })
        }catch (err){
            toast.error(`Произошла внутренняя ошибка${err.status}`, {
                icon: '❌'
            })
        }
    }
    
    if(listToRender){
        filteredList = listToRender.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )

        catalog_list_li = filteredList.map((item: itemInterface) => {
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
                    <button
                        onClick={handleAddToCard}
                        className={styles.cardAdd}
                        id={styles.cardAdd}
                    >
                        Добавить
                    </button>
                    <span>
                        
                    </span>
                </div>
            )
        })
        return (
            <div className={styles.main_container}>
                <h2>{title}</h2>
                <div className={styles.list_container}>
                    {filteredList.length > 0 ? (catalog_list_li) : (<h3>Товары не найдены</h3>)} 
                </div>
            </div>
        )
    }else {
        return (
            <div className={styles.main_container}>
                <h2>{title}</h2>
                <div className={styles.list_container}>
                    {catalog_list_li}
                </div>
            </div>
        )
    }
}