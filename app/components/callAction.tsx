import Link from "next/link";

export default function CallAction() {
    return(
        <div className="call-action text-center">
            <h1>
                Currently You are using free
                <br></br>
                Lite version of ShopGrids
            </h1>
            <p>
                Please, purchase full version of 
                the template to get all pages,
                <br></br>
                features and commercial license.
            </p>
            <button className="main-btn white">
                <Link href="#">Purchase Now</Link>
            </button>
        </div>
    )
}