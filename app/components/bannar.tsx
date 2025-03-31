
type BannerType = {
    offer: string,
    title: string,
    price: string,
    imgSrc: string
}

export default function Banner({title, offer, price, imgSrc} : BannerType) {
    return(
        <div className="banner" style={{backgroundImage: `url(${imgSrc})`}}>
            <h2>
                <span>{offer}</span>
                {title}
            </h2>
            <p>${price}</p>
        </div>
    )
}