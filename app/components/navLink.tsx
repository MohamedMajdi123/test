'use client'
import Link from "next/link";
import { useRef, useState } from "react";
type NavLinkPropsType = {
    key: number,
    name: string,
    links: string[]
}


export default function NavLink({name, links, key} : NavLinkPropsType) {
    const listRef = useRef<HTMLUListElement>(null);
    const menu = useRef<HTMLElement>(null);
    const [showstate, setShowState] = useState(true);
    function show() {
        if(showstate) {
            if(listRef.current) {
                listRef.current.classList.add("show");
                setShowState(false);
                console.log("Show");
                if(menu.current) {
                    menu.current.classList.add("show");
                }
            }
        } else {
            if(listRef.current) {
                if(menu.current) {
                    listRef.current.classList.remove("show");
                }
                setShowState(true);
                console.log("Hide");
                if(menu.current) {
                    menu.current.classList.remove("show");
                }
            }
        }
        }
    const linkList = links.map(e => {
        return (
            <li key={e}>
                <Link href="">{e}</Link>
            </li>
    )
    })
    return(
        <div className="nav-link" key={key} onClick={show}>
            <Link href="">{name}</Link>
            {links.length > 0 ? 
                <i className="arrow fa-solid fa-angle-down" ref={menu}></i> : ''}
            <ul className={links.length > 0 ? "have" : ""} ref={listRef}>
                {linkList}
            </ul>
        </div>
    )
}