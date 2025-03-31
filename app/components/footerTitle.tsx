
type PropsTitleType = {
    title: string
}

export default function FooterTitle({title} : PropsTitleType) {
    
    return(
        <div className="footer-title">
            <h3>{title}</h3>
        </div>
    )
}