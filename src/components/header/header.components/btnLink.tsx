import { Link } from "react-router"
import buttonType from "./buttonInterface"

export default function BtnLink({title, cName, imgSrc, linK}: buttonType){
    return (
        <Link
            className={cName}
            to={`/${linK}`}
        >
            <img src={imgSrc} alt={linK} />
            <span>{title}</span>
        </Link>
    )
}