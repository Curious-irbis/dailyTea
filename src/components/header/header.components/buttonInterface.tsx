interface itemInterface{
    title: string,
    img: string,
    description: string,
    price: number
}

export default interface buttonType{
    title?: string,
    cName: string,
    imgSrc?: string,
    linK?: string,
    imgAlt?: string,
    children?: string,
    searchList?: Array<itemInterface>,
    searchQuery?: string
}