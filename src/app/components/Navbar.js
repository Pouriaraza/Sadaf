import Image from 'next/image';
import Link from 'next/link';
import "./navbar.scss"
import HeaderNavLink from './HeaderNavLink';
const menuItems = [
    { label: `Work`, url: `/work` },
    { label: `Who AmI?`, url: `/whoiam` },
    { label: `Contact`, url: `/contact` }

];

const Navbar = () => {

    return (
        <section className='navbarr'>
            <div className="header">
                <section className="navbar">
                    <div className='menu-theme'>
                        <nav>
                            <ul className="menu">
                                <li><Link href="/" className='active'>Home</Link></li>
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

                    </div>

                </section>
            </div>

        </section>
    );
};


export default Navbar;