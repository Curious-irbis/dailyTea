import { useState } from "react"
import buttonType from "./buttonInterface"

interface teaInterface{
    title: string,
    img: string,
    description: string,
    price: number
}

export default function SearchBtn({cName, imgSrc, imgAlt, searchQuery, setSearchQuery}){
    
    return(
        <div
            className={cName}
        >
            <img src={imgSrc} alt={imgAlt} />
            <input 
                type="text"
                placeholder='Поиск'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}