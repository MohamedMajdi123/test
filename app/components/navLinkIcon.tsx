'use client'

import { useEffect, useRef, useState } from "react";

export default function NavLinkIcon() {
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuState, setMenuState] = useState(false);
    function handel() {
        if(menuRef.current) {
            if(menuState) {
                setMenuState(false);
            } else {
                setMenuState(true);
            }
        }
    }
    useEffect(() =>{
        if(menuRef.current) {
            if(menuState === true) {
                menuRef.current.classList.add("show");
            } else {
                menuRef.current.classList.remove("show");
            }
        }
    },[menuState])
    return(
        <div className="menu burger" ref={menuRef} onClick={handel}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}