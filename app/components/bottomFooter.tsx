import Image from "next/image"
import Link from "next/link"

export default function BottomFooter() {
    return(
        <div className="bottom-footer pt-5 pb-5">
            <div className="content m-auto text-center">
                <div className="payment">
                    <span>We Accept: </span>
                    <Image width={200} layout="responsive" height={1000} alt="" src="/images/footer/credit-cards-footer.png"/>
                </div>
                <div className="copy-right">
                    Designed and Developed by 
                    <Link href="#"> GrayGrids</Link>
                </div>
                <div className="follow social d-flex align-items-center">
                    <span>Follow Us On:</span>
                    <ul className="d-flex links align-items-center">
                        <li className="circle-icon">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="circle-icon">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="circle-icon">
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="circle-icon">
                            <a href="#">
                                <i className="fab fa-google"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}