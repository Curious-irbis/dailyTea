import { Link } from "react-router"

export default function SideButton({children, title, cName, srcImg}){
    return (
        <Link 
            to={`/${title}`}
            className={cName}
        >
            <img src={srcImg} alt={title} />
            <span>{children}</span>
        </Link>
    )
}