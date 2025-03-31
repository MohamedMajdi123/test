import Product from "./product";
import products from '../locale/products.json';

export default function Products() {
    const allProdcut = products.map(e => {
        return (
            <Product 
                name={e.name}
                discount={e.discount ? e.discount : ""}
                category={e.category}
                key={e.id.toString()}
                id={e.id.toString()}
                reviews={e.reviews.toString()}
                price={e.price.toString()}
                original_price={e.original_price ? e.original_price?.toString() : ""}
                imgSrc={e.imgSrc}
                isNew={e.isNew ? e.isNew : false}
            />
        )
    })
    return(
        <div className="products pt-5">
            <div className="content pt-5">
                <div className="text-center main-title">
                    <h2>Trending Product</h2>
                    <p>
                        There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered
                        alteration in some form.
                    </p>
                </div>
                <div className="row">
                    {allProdcut}
                </div>
            </div>
        </div>
    )
}