import buttonType from "./buttonInterface"
import toast from "react-hot-toast"

export default function AlertButton({title, imgSrc, cName}: buttonType){
    const handleCall = () => {
        try{
            toast('Мы уже позвали официанта', {
                duration: 1200,

                style: {
                    backgroundColor: '#F4A24F',
                    color: 'beige',
                }
            })
        }catch{
            toast.error('Внутренняя ошибка')
        }
        
        
    }
    return(
        <div 
            className={cName}
            onClick={handleCall}
        >
            <img src={imgSrc} alt={title} />
            <span>{title}</span>
        </div>
    )
}