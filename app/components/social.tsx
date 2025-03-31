export default function Social() {
    return(
        <div className="social d-flex align-items-center">
            <span className="follow">Follow Us:</span>
            <ul className="links d-flex align-items-center">
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
                        <i className="fab fa-skype"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}