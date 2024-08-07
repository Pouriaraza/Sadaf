
import { useState } from "react";
import "./mobliemenu.scss"
import Link from "next/link";
import HeaderNavLink from "./HeaderNavLink";


export default function Mobilemenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [hide, show] = useState(false);
    const [noterote, rote] = useState(false);

    const menuItems = [
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
                    <li onClick={() => show((prev) => !prev)} className='workitem'>
                        <Link href="#" className='work active' onClick={() => rote((prev) => !prev)}>Work</Link>
                        <span className={noterote ? "notrote" : "rote"}></span>

                        <ul className={hide ? "showWork" : "hideWork"}>
                            <li className="BrandDesignA"><Link href="/work/BrandDesign">Brand Design</Link>
                                <ul className="BrandDesignitem">
                                    <li><Link href="/work/BrandDesign/modernarch">Modern arch</Link></li>
                                    <li><Link href="/work/BrandDesign/shana">Shana</Link></li>
                                    <li><Link href="/work/BrandDesign/tourgo">tourgo</Link></li>
                                </ul>
                            </li>
                            <li className="SocialMediaA">
                                <Link href="/work/SocialMedia" >Social Media</Link>
                                <ul className="SocialMediaitem">
                                    <li><Link href="/work/SocialMedia/Instagrampost">instagram post design</Link></li>
                                    <li><Link href="/work/SocialMedia/instagramstory">instagram story design</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
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
