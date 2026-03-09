import buttonType from "./buttonInterface"

export default function SearchBtn({cName, imgSrc, imgAlt}: buttonType){
    return(
        <div
            className={cName}
        >
            <img src={imgSrc} alt={imgAlt} />
            <input type="text" placeholder='Поиск'/>
        </div>
    )
}