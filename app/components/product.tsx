import Image from "next/image";
type ProductPropsType = {
    id: string,
    category: string,
    name: string,
    price: string,
    reviews: string,
    imgSrc: string,
    original_price: string,
    isNew?: boolean,
    discount: string
}
export default function Product(
    {
    category,
    name, 
    price,
    imgSrc,
    reviews,
    id,
    original_price,
    isNew,
    discount
    } : ProductPropsType
) {
    const reviewsList = [];
    for (let i = 0; i < +reviews; i++) {
        reviewsList.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let i = 0; i < 5 - +reviews; i++) {
        reviewsList.push(<i key={+reviews + i} className="far fa-star"></i>);
    }
    return(
        <div className=" col-lg-3 col-md-6 col-12">
            <div className="product" id={id}>
                <div className="image">
                    <Image src={imgSrc} layout="responsive" height={1000} width={750} alt=""/>
                <button className="main-btn text-center d-flex align-items-center"> 
                    <a href="">
                        <i className="fas fa-shopping-cart"></i>
                        Add To Cart
                    </a>
                </button>
                </div>
                <div className="text">
                {isNew === true ? <div className="new">New</div> : ""}
                {
                discount.length > 0 ? 
                    <div className="new dis">{discount}</div>
                    : ""
                }
                    <span>{category}</span>
                    <h3>{name}</h3>
                    <div className="stars d-flex align-items-center">
                        <div className="d-flex">
                            {reviewsList}
                        </div>
                        <span>{reviews} Review(s)</span>
                    </div>
                    <p>${price + ".00"} <span>{original_price.length > 0 ? "$" + original_price + ".00" : ''}</span></p>
                </div>
            </div>
        </div>
    )
}