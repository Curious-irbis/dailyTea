import Header from "../components/header/header"
import MainScreen from "../components/mainScreen/mainScreen"

import green_tea from '../assets/img/tea/green.jpeg'
import black_tea from '../assets/img/tea/black.jpeg'
import yellow_tea from '../assets/img/tea/yellow.jpeg'
import white_tea from '../assets/img/tea/white.jpeg'
import oolong from '../assets/img/tea/oolong.jpeg'
import pouer from '../assets/img/tea/pouer.jpeg'
import { useState } from "react"


interface teaInterface{
    title: string,
    img: string,
    description: string,
    price: number
}

const teaList: teaInterface[] = [
    {
        title: 'Зеленый чай',
        img: green_tea,
        description: `
            Его ферментируют гораздо меньше, причем для приготовления используют только верхние 
            2 листа и нежные почки. Этот напиток — источник антиоксидантов и обладатель 
            выраженного травянистого, горьковатого вкуса.
        `,
        price: 350
    },
        {
        title: 'Черный чай',
        img: black_tea,
        description: `
            Самый любимый напиток в Европе и России (кстати, в Китае его называют красным). 
            Его пряного, насыщенного, чуть терпковатого вкуса добиваются путем сильной 
            ферментации собранных листьев и почек.  
        `,
        price: 250
    },
        {
        title: 'Белый чай',
        img: white_tea,
        description: `
            Изготавливают только из нежных чайных почек, без листьев, 
            и ферментируют очень слабо. На вкус он самый нежный, ароматный, 
            с пикантной кислинкой, и кстати — лидер по содержанию антиоксидантов.
        `,
        price: 450
    },
        {
        title: 'Желтый чай',
        img: yellow_tea,
        description: `
            Самый редкий из всех видов китайского чая, готовится только из почек, 
            но ферментируется чуть больше, чем белый. По вкусу — золотая середина 
            между белым и зеленым. Считается, что настоящий желтый чай можно
            купить только в Китае. 
        `,
        price: 1450
    },
        {
        title: 'Улун',
        img: oolong,
        description: `
            Сюда входит полный спектр полуферментированных чаев — от тех, которые 
            ближе к зеленому, до «уже почти черных». Их любят за интенсивный, 
            сладковатый, чуть дымный аромат. 
        `,
        price: 350
    },
        {
        title: 'Пуэр',
        img: pouer,
        description: `
            Постферментированный напиток из почек, листьев и иногда черенков. 
            После обычной обработки сырье прессуют и дают дозреть в течение 45–65 дней 
            (Шу) или 10 лет и более (Шен). После выдержки у чая появляется удивительно 
            яркий вкус с оттенками шоколада, орехов, дыма, а также мокрой земли, грибов и трав. 
        `,
        price: 800
    },
]


export default function Home(){
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div>
            <Header 
                // list={teaList}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <MainScreen 
                text="Чай" 
                searchQuery={searchQuery}
                list={teaList}
            />
        </div>
    )
}