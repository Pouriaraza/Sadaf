
import { useState } from "react";
import "./mobliemenu.scss"
export default function Mobilemenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <section className="MOBILE-MENU">
            <div
                className="HAMBURGER-ICON"
                onClick={() => setIsNavOpen((prev) => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

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
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </section>



    );
}
