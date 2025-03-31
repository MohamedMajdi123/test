import Link from "next/link";

type BannerPropsType = {
    id: string,
    name: string,
    discriptionLine1: string,
    discriptionLine2: string,
    imgSrc: string,
    btn: string
}


export default function SingleBanner(
    {
        name,
        discriptionLine1,
        discriptionLine2,
        imgSrc,
        btn,
        id
    } : BannerPropsType
) {
    return(
        <div className="col-12 col-lg-6 col-md-6" id={id}>
            <div className="banner" style={{backgroundImage: `url(${imgSrc})`}}>
                <div className="box">
                    <h2>{name}</h2>
                    <p>
                        {discriptionLine1}
                        <br></br>
                        {discriptionLine2}
                    </p>
                    <button className="main-btn">
                        <Link href="#">{btn}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}