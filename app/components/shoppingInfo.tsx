import Info from "./info"

export default function ShoppingInfo() {
    const allInfo = [
        {
            id: 0,
            icon: "fas fa-shipping-fast",
            title: "Free Shipping",
            discrition: "On order over $99"
        },
        {
            id: 1,
            icon: "fas fa-headset",
            title: "24/7 Support.",
            discrition: "Live Chat Or Call."
        },
        {
            id: 2,
            icon: "fab fa-cc-visa",
            title: "Online Payment.",
            discrition: "Secure Payment Services."
        },
        {
            id: 3,
            icon: "fas fa-sync",
            title: "Easy Return.",
            discrition: "Hassle Free Shopping."
        },
    ]

    const infoList = allInfo.map(e => {
        return(
            <Info 
                key={e.id}
                id={e.id.toString()}
                icon={e.icon}
                discription={e.discrition}
                title={e.title}
            />
        )
    })

    return(
        <div className="shopping-info  mt-5 pb-5">
            <div className="content pt-5 pb-5">
                <div className="row">
                    {infoList}
                </div>
            </div>
        </div>
    )
}