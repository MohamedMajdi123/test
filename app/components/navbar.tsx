import NavLink from "./navLink";
type NavType = {
    key: number,
    name: string,
    links: string[]
}
const navlinks = [
    {
        key: 0,
        name: "Home",
        links: []
    },
    {
        key: 1,
        name: "Pages",
        links: [
            "About Us",
            "Faq", 
            "Login", 
            "Regiter", 
            "Mail Sucsess",
            "404 Error"
        ]
    },
    {
        key: 2,
        name: "Shop",
        links: [
            "Shop Grid",
            "Shop List", 
            "Shop Single", 
            "Cart", 
            "Checkout"
        ]
    },
    {
        key: 3,
        name: "Blog",
        links: [
            "Blog Grid Sidebar",
            "Blog Single", 
            "Blog Single Sibebar"
        ]
    },
    {
        key: 4,
        name: "Contact Us",
        links: []
    }
];

export default function Navbar() {
    const navList = navlinks.map((e: NavType) => {
        return <NavLink key={e.key} name={e.name} links={e.links}/>
    })
    return(
        <div className="navbar d-flex align-items-center">
            {navList}
        </div>
    )
}