
import { useState } from "react";
import "./mobliemenu.scss"
import Link from "next/link";
import HeaderNavLink from "./HeaderNavLink";


export default function Mobilemenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const menuItems = [
        { label: `Work`, url: `/work` },
        { label: `Who AmI?`, url: `/whoiam` },
        { label: `Contact`, url: `/contact` }

    ];
    return (
        <section className="MOBILE-MENU">
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div onClick={() => setIsNavOpen(false)}>
                    <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul>
                    <li><Link href="/" className='active'>Home</Link></li>
                    {menuItems.map(({ url, label }, index) => (
                        <HeaderNavLink key={index} href={url}>{label}</HeaderNavLink>
                    ))}
                </ul>
            </div>
            <section className="menuhead">
                <ul className="social">
                    <li className='be'></li>
                    <li className='linkdin'></li>
                    <li className='mail'></li>
                </ul>
                <div className="HAMBURGER-ICON"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </section>
        </section>



    );
}
