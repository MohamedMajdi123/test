'use client';
import '@/public/css/footer.css';
import TopFooter from "./topFooter";
import MiddelFooter from './middelFooter';
import BottomFooter from './bottomFooter';

function Footer() {
    return(
        <div className="footer">
            <TopFooter />
            <MiddelFooter />
            <BottomFooter />
        </div>
    )
}
export default Footer;