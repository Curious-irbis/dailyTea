import Header from "../components/header/header";
import MainScreen from "../components/mainScreen/mainScreen";

export default function FoodChoice(props){
    return (
        <div>
            <Header />
            <MainScreen text='food'/>
        </div>
    )
}