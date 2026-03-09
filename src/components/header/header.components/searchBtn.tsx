export default function SearchBtn({cName, imgSrc, imgAlt}){
    return(
        <div
            className={cName}
        >
            <img src={imgSrc} alt={imgAlt} />
            <input type="text" placeholder='Поиск'/>
        </div>
    )
}