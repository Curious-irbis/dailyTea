import Header from "../components/header/header";
import MainScreen from "../components/mainScreen/mainScreen";

import { useState } from "react";

export default function Card(props){
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div>
            <Header 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <MainScreen text='Корзина'/>
        </div>
    )
}