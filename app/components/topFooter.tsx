import Image from "next/image";

export default function TopFooter() {
    return(
        <div className="top-footer">
            <div className="content d-flex align-items-center  pt-5 pb-5">
                <div className="col-lg-3 col-md-4 col-12">
                    <div className="logo">
                        <Image src="/images/logo/white-logo.svg" width={200} height={100} alt=""/>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-12">
                    <div className="subscribe d-flex align-items-center">
                        <div className="text">
                            <h3>Subscribe to our Newsletter</h3>
                            <p>Get all the latest information, Sales and Offers.</p>
                        </div>
                        <div className="form">
                            <input type="text" placeholder="Email address here..."/>
                            <button className="main-btn">Subscribe</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}