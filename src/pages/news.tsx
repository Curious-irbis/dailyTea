import Header from "../components/header/header";
import MainScreen from "../components/mainScreen/mainScreen";

export default function News(props){
    return (
        <div>
            <Header />
            <MainScreen text='news'/>
        </div>
    )
}