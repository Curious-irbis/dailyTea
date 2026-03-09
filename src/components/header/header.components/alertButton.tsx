export default function AlertButton({title, imgSrc, cName}){
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