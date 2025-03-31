import SingleBanner from "./singleBanner";

const banners = [
    {
        id: "0",
        imgSrc: "/images/banner/banner-1-bg.jpg",
        name: "Smart Watch 2.0",
        discriptionLine1: `Space Gray Aluminum Case with`,
        discriptionLine2: `Black/Volt Real Sport Band`,
        btn: "View Details"
    },
    {
        id: "1",
        imgSrc: "/images/banner/banner-2-bg.jpg",
        name: "Smart Headphone",
        discriptionLine1: `Lorem ipsum dolor sit amet,`,
        discriptionLine2: `tempor incididunt ut labore.`,
        btn: "Shop Now"
    }
]

export default function Banners() {
    const bannersList = banners.map(e => {
        return(
            <SingleBanner
                key={e.id} 
                name={e.name}
                discriptionLine1={e.discriptionLine1}
                discriptionLine2={e.discriptionLine2}
                id={e.id}
                imgSrc={e.imgSrc}
                btn={e.btn}
            />
        )
    })
    return(
        <div className="content">
            <div className="row banners">
                {bannersList}
            </div>
        </div>
    )
}