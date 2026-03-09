import Header from "../components/header/header"
import MainScreen from "../components/mainScreen/mainScreen"

export default function Home(props){
    return (
        <div>
            <Header />
            <MainScreen text="home"/>
        </div>
    )
}