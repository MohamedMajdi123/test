import FooterTitle from "./footerTitle";
import Link from 'next/link';

type InfoLinksType = {
    title: string,
    list: string[]
}

export default function InfoLinks({title, list} : InfoLinksType) {
    let key = 0;
    const infoList = list.map(e => {
        key++;
        return(
            <li key={key}>
                <Link href="#">{e}</Link>
            </li>
        )
    })
    return(
        <div className="col-lg-3 col-md-6 col-12">
            <div className="info-links">
                <FooterTitle title={title}/>
                <ul className="links">
                    {infoList}
                </ul>
            </div>
        </div>
    )
}