import buttonType from "./buttonInterface"

export default function AlertButton({title, imgSrc, cName}: buttonType){
    return(
        <div 
            className={cName}
            onClick={() => alert(title)}
        >
            <img src={imgSrc} alt={title} />
            <span>{title}</span>
        </div>
    )
}