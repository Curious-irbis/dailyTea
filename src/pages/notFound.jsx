import { Link } from "react-router"

export default function NotFound(props){
    return (
        <div>
            <nav>
                <Link
                    to='/'
                >Back home</Link>
            </nav>
            <h1>Not Found</h1>
        </div>
    )
}