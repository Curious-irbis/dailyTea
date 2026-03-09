// этот файл отвечает за товары на странице
import styles from './catalog.module.scss'

import { useState } from "react"

export default function Catalog(props){
    const title: string = props.pName

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}