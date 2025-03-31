import Image from "next/image";
import logo from '@/public/images/logo/logo.svg'
import Link from "next/link";

export default function Logo() {
    return(
        <Link href='/'>
            <Image src={logo} alt="logo-img" width={200}/>
        </Link>
    )
}