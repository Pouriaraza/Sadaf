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
                            <li><Link href="item1">Item1</Link></li>
                            <li><Link href="item1">Item1</Link></li>
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