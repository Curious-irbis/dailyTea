import Header from "../components/header/header";
import MainScreen from "../components/mainScreen/mainScreen";

export default function Card(props){
    return (
        <div>
            <Header />
            <MainScreen text='card'/>
        </div>
    )
}