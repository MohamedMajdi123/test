'use client'
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Links() {
    const [t] = useTranslation();
    return(
        <ul className="links d-flex">
            <Link href="/">{t('Home')}</Link>
            <Link href="/about">{t('About Us')}</Link>
            <Link href="/contact">{t('Contact Us')}</Link>
        </ul>
    )
}
export default Links;