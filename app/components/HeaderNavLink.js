'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <li>
      <Link href={href} className='active'>
        {children}
      </Link>
    </li>
  );
};

export default HeaderNavLink;
