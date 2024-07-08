"use client"
import Link from 'next/link';
import "./navbar.scss"
import HeaderNavLink from './HeaderNavLink';
import { useState, useEffect, useRef } from 'react';
import Mobilemenu from './Mobilemenu';



const menuItems = [
    { label: `Who Am I?`, url: `/whoiam` },
    { label: `Contact`, url: `/contact` }

];

const Navbar = () => {

    return (
        <section className='navbar'>

            <Mobilemenu />
            <nav className='desktopmenu'>
                <ul >
                    <li><Link href="/" className='active'>Home</Link></li>
                    <li className='workitem'><Link href="/work" className='worka active'>Work</Link>
                        <ul className='inside-menu'>
                            <li><Link href="/work/BrandDesign" className='BrandDesign'>Brand Design</Link>
                                <ul>
                                    <li><Link href="/work/BrandDesign/modernarch">Modern arch</Link></li>
                                    <li><Link href="/work/BrandDesign/shana">Shana</Link></li>
                                    <li><Link href="/work/BrandDesign/tourgo">tourgo</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/work/SocialMedia" className='SocialMedia'>Social Media</Link>
                                <ul>
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

                <ul className='social'>
                    <li className='be'></li>
                    <li className='linkdin'></li>
                    <li className='mail'></li>
                </ul>

            </nav>


        </section>
    );
};


export default Navbar;