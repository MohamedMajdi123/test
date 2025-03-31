import { useRef } from "react";

type sliderPropsType = {
    offer: string,
    title: string,
    url: string,
    describtion: string,
    shop: string,
    price: string
}

export default function Slide({ offer, title, describtion, url, shop, price }: sliderPropsType) {
    const slideRef = useRef<HTMLDivElement>(null);

    return (
        <div 
            className="slide" 
            ref={slideRef} 
            style={{ backgroundImage: `url(${url})` }}
        >
            <div className="box">
                <h2>
                    <span>{offer}</span>
                    {title}
                </h2>
                <p>{describtion}</p>
                <h3>
                    <span>{shop}</span>
                    ${price}
                </h3>
                <button className="main-btn">
                    <a className="btn" href="">Shop Now</a>
                </button>
            </div>
        </div>
    );
}