type InfoPropsType = {
    icon: string,
    title: string,
    discription: string,
    id: string
}

export default function Info({icon, title, discription, id} : InfoPropsType) {
    return(
        <div className="info col-lg-3 col-md-6 col-12 text-center" id={id}>
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{discription}</p>
        </div>
    )
}