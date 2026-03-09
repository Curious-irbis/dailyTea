import { Link } from "react-router"


export default function BtnLink({linK, imgSrc, cName, title}){
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