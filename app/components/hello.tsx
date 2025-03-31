'use client'

import Link from "next/link";
import { useTranslation } from "react-i18next";

function Hello() {
    const [t,] = useTranslation();
    return(
        <div className="hello d-flex align-items-center">
            <div className="user d-flex align-items-center">
                <i className="fa-regular fa-user"></i>
                <span>{t('Hello')}</span>
            </div>
            <ul className="user-login">
                <Link href="/sign-in">{t('Sign In')}</Link>
                <Link href="/register">{t('Register')}</Link>
            </ul>
        </div>
    )
}

export default Hello;