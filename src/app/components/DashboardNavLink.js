'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link href={href}>
      {children}
    </Link>
  );
};

export default DashboardNavLink;
