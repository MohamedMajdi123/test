import Selection from './selection'
import Links from './links'
import Hello from './hello';
import Logo from './logo';
import Search from './search';
import HotLine from './hotline';
import CartIcon from './cartIcon';
import Categories from './categories';
import Navbar from './navbar';
import Social from './social';
import NavLinkIcon from './navLinkIcon';


function Header() {
    const langOptions = [
        "English",
        "हिन्दी", 
        "বাংলা", 
        "العربية",
        "Español",
        "Filipino",
        "Français",
    ];
    const currncy = [
        "$ USD",
        "$ EURO",
        "$ CAD",
        "$ INR",
        "$ CNY",
        "$ BDT",
    ];
    
    return(
        <div className="header">
            <div className="top-par">
                <div className="content d-flex align-items-center">
                    <div className="left-top d-flex align-items-center">
                        <Selection options={langOptions} selectionType="lang"/>
                        <Selection options={currncy} selectionType="curruncy"/>
                    </div>
                    <Links />
                    <Hello />
                </div>
            </div>
            <div className="header-middle pt-3 pb-3">
                <div className="content d-flex align-items-center pt-3 pb-3">
                    <Logo />
                    <Search />
                    <HotLine />
                    <CartIcon />
                </div>
            </div>
            <div className="header-bottom">
                <div className="content d-flex align-items-center">
                    <Categories />
                    <NavLinkIcon />
                    <Navbar />
                    <Social />
                </div>
            </div>
        </div>
    )
}
export default Header;