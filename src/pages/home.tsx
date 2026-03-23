import Header from "../components/header/header"
import MainScreen from "../components/mainScreen/mainScreen"

import green_tea from '../assets/img/tea/green.jpeg'
import black_tea from '../assets/img/tea/black.jpeg'
import yellow_tea from '../assets/img/tea/yellow.jpeg'
import white_tea from '../assets/img/tea/white.jpeg'
import oolong from '../assets/img/tea/oolong.jpeg'
import pouer from '../assets/img/tea/pouer.jpeg'
import dushitsa from '../assets/img/no-tea/dushitsa.jpeg'
import zveroboy from '../assets/img/no-tea/zveroboy.jpeg'
import malina from '../assets/img/no-tea/malina.jpeg'
import myatya from '../assets/img/no-tea/myata.jpeg'
import romashka from '../assets/img/no-tea/romashka.jpeg'
import smorodina from '../assets/img/no-tea/smorodina.jpeg'
import chabrets from '../assets/img/no-tea/chabrets.jpeg'
import blue from '../assets/img/no-tea/blue.jpeg'
import imbir from '../assets/img/no-tea/imbir.jpeg'
import karkade from '../assets/img/no-tea/karkade.jpeg'
import mate from '../assets/img/no-tea/mate.jpeg'
import roybush from '../assets/img/no-tea/roybush.jpeg'

import { useState } from "react"
import { create } from "zustand"


interface teaInterface{
    title: string,
    img: string,
    description: string,
    price: number,
    manipulation: () => void
}

const teaProcedure = create((set) => ({
    teaCount: 0,
    increaseTeaValue: () => set((state) => ({teaCount: state.teaCount + 1})),
    removeAllTeas: () => set({teaCount: 0}),
    updateTeas: (newTeaCount) => set({teaCount: newTeaCount})
}))



const teaList: teaInterface[] = [
    {
        title: 'Зеленый чай',
        img: green_tea,
        description: `
            Его ферментируют гораздо меньше, причем для приготовления используют только верхние 
            2 листа и нежные почки. Этот напиток — источник антиоксидантов и обладатель 
            выраженного травянистого, горьковатого вкуса.
        `,
        price: 350,
        manipulation: teaProcedure
    },
        {
        title: 'Черный чай',
        img: black_tea,
        description: `
            Самый любимый напиток в Европе и России (кстати, в Китае его называют красным). 
            Его пряного, насыщенного, чуть терпковатого вкуса добиваются путем сильной 
            ферментации собранных листьев и почек.  
        `,
        price: 250,
        manipulation: teaProcedure
    },
        {
        title: 'Белый чай',
        img: white_tea,
        description: `
            Изготавливают только из нежных чайных почек, без листьев, 
            и ферментируют очень слабо. На вкус он самый нежный, ароматный, 
            с пикантной кислинкой, и кстати — лидер по содержанию антиоксидантов.
        `,
        price: 450,
        manipulation: teaProcedure
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
        price: 1450,
        manipulation: teaProcedure
    },
        {
        title: 'Улун',
        img: oolong,
        description: `
            Сюда входит полный спектр полуферментированных чаев — от тех, которые 
            ближе к зеленому, до «уже почти черных». Их любят за интенсивный, 
            сладковатый, чуть дымный аромат. 
        `,
        price: 350,
        manipulation: teaProcedure
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
        price: 800,
        manipulation: teaProcedure
    },
    {
        title: 'Ройбуш',
        img: roybush,
        description: `
            Африканский напиток из стеблей и листьев аспалатуса, 
            низкого колючего кустарника. Это напиток без кофеина, 
            чуть сладковатый и очень травянистый на вкус.  
        `,
        price: 300,
        manipulation: teaProcedure
    },
    {
        title: 'Мате',
        img: mate,
        description: `
            Напиток из листьев парагвайского дуба — травянистый, 
            плотный, густой, с высоким содержанием матеина (тот же кофеин).   
        `,
        price: 400,
        manipulation: teaProcedure
    },
    {
        title: 'Каркаде',
        img: karkade,
        description: `
            Отвар цветов гибискуса, напоминает компот. 
            Имеет ярко-красный цвет, кисло-сладкий вкус, 
            тонизирует за счет высокого содержания витамина С, 
            а не кофеина.   
        `,
        price: 200,
        manipulation: teaProcedure
    },
    {
        title: 'Имбирные',
        img: imbir,
        description: `
            Часто основу для отвара составляет корень имбиря 
            с добавлением трав и ягод. Острый, пряный, 
            ароматный напиток с противовоспалительным эффектом.  
        `,
        price: 400,
        manipulation: teaProcedure
    },
    {
        title: 'Смородиновый',
        img: smorodina,
        description: `
            Смородиновый чай — это глоток лета, наполненный ароматом дачного сада. 
            Напиток обладает глубоким, насыщенным цветом, 
            ярким ягодным вкусом и тонким ароматом свежих листьев, 
            который согревает в прохладные вечера. Этот целебный чай, 
            богатый витаминами, дарит не только уют, но и укрепляет здоровье, 
            повышая иммунитет.    
        `,
        price: 450,
        manipulation: teaProcedure
    },
    {
        title: 'Малиновый',
        img: malina,
        description: `
            Малиновый чай — это уютный эликсир с ароматом лета,
             сочетающий глубокий вкус с яркими нотами лесных ягод,
              который дарит тепло и пользу. Этот целебный напиток 
              обладает рубиновым оттенком, согревающим эффектом и 
              нежным ягодным послевкусием, напоминая о жарких солнечных днях  
        `,
        price: 550,
        manipulation: teaProcedure
    },
    {
        title: 'Душица',
        img: dushitsa,
        description: `
            Чай с душицей — это квинтэссенция летнего луга в вашей чашке, 
            сочетающая пряный, цветочно-медовый аромат с легкой свежестью. 
            Напиток обладает успокаивающим эффектом, имеет приятный вкус с 
            тонкими цитрусовыми нотками, согревает в холода и дарит уют.
            Его часто называют «лесной мятой» или «материнкой» за особую пользу.  
        `,
        price: 250,
        manipulation: teaProcedure
    },
    {
        title: 'Зверобой',
        img: zveroboy,
        description: `
            Чай из зверобоя — это янтарный напиток с ароматом солнечного луга 
            и терпким, медово-травянистым вкусом, который дарит спокойствие и тепло. 
            Золотистый отвар, получаемый из ярких желтых цветков, согревает в холод, 
            укрепляет дух и приносит целительную силу самой природы, успокаивая мысли 
            и мягко заботясь о здоровье.  
        `,
        price: 250,
        manipulation: teaProcedure
    },
    {
        title: 'Ромашка',
        img: romashka,
        description: `
            Ромашковый чай — это золотистый эликсир спокойствия, 
            объединяющий тонкий цветочный аромат и мягкий, 
            сладковато-травяной вкус. Напиток дарит умиротворение, 
            идеален для вечернего расслабления, избавляя от стресса и улучшая сон. 
        `,
        price: 250,
        manipulation: teaProcedure
    },
    {
        title: 'Синие',
        img: blue,
        description: `
            Тайский синий чай — напиток из цветов клитории тройчатой, 
            или тайской орхидеи. Цветы дают сильный пряный аромат и 
            такой интенсивный цвет, что отвар поначалу кажется негодным 
            для питья. Однако он очень полезен для нервной системы, 
            благотворно воздействует на кожу и используется в традиционной тайской медицине.   
        `,
        price: 300,
        manipulation: teaProcedure
    },
    {
        title: 'Мята',
        img: myatya,
        description: `
            Мятный чай — это освежающий эликсир с ярким ментоловым ароматом, 
            дарящий прохладу и релаксацию. Его нежный травянистый вкус с 
            нотками свежести снимает усталость, успокаивает мысли и переносит 
            в атмосферу природы. Это идеальное сочетание ментоловой бодрости и 
            спокойствия, знакомое с детства.  
        `,
        price: 350,
        manipulation: teaProcedure
    },
    {
        title: 'Чабрец',
        img: chabrets,
        description: `
            Чай с чабрецом («Богородицкая травка») — это целебный, 
            согревающий напиток с густым пряным ароматом и легкими 
            анисовыми нотками. Его терпкий вкус отлично сочетается с 
            черным чаем, даря спокойствие и уют. Этот чай — идеальное 
            средство для укрепления иммунитета, борьбы с простудой и стрессом.   
        `,
        price: 350,
        manipulation: teaProcedure
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