import Link from "next/link";
import FooterTitle from "./footerTitle";
import InfoLinks from "./infoLinks";

export default function MiddelFooter() {
    const footerList = [
        {
            id: 0,
            title: "Information",
            list: [
                "About Us",
                "Contact Us",
                "Downloads",
                "Sitemap",
                "FAQs Page"
            ]
        },
        {
            id: 1,
            title: "Shop Departments",
            list: [
                "Computers & Accessories",
                "Smartphones & Tablets",
                "TV, Video & Audio",
                "Cameras, Photo & Video",
                "Headphones"
            ]
        }
    ]
    return(
        <div className="middel-footer">
            <div className="content d-flex  pt-5 pb-5">s
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="links get">
                            <FooterTitle title="Get In Touch With Us"/>
                            <ul>
                                <li className="phone">Phone: +1 (900) 33 169 7720</li>
                                <li>
                                    <span>Monday-Friday:</span>
                                    9.00 am - 8.00 pm
                                </li>
                                <li>
                                    <span>Saturday:</span>
                                    10.00 am - 6.00 pm
                                </li>
                                <li className="email">
                                    <Link href="#">support@shopgrids.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="links d-app">
                                <FooterTitle title="Our Mobile App"/>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple"></i>
                                            <div className="text">
                                                <span className="small-title">Download on the</span>
                                                <span className="bi-title">App Store</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-play"></i>
                                            <div className="text">
                                                <span className="small-title">Download on the</span>
                                                <span className="bi-title">Google Play</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <InfoLinks title={footerList[0].title} list={footerList[0].list}/>
                    <InfoLinks title={footerList[1].title} list={footerList[1].list}/>
                </div>
            </div>
        </div>
    )
}