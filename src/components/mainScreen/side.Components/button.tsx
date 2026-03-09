import { Link } from "react-router"

import buttonType from "../../header/header.components/buttonInterface"

export default function SideButton({title, cName, imgSrc, children}: buttonType){
    return (
        <Link 
            to={`/${title}`}
            className={cName}
        >
            <img src={imgSrc} alt={title} />
            <span>{children}</span>
        </Link>
    )
}