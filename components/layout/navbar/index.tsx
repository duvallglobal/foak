import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

// Custom navigation items for the store
const customNavItems = [
  { title: 'Shop', path: '/search' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' }
];

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  // Use custom nav items, fallback to menu if empty
  const navItems = customNavItems.length > 0 ? customNavItems : menu;

  return (
    <nav className="relative flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 bg-[#1a1a1a] border-b border-neutral-700 gap-2 sm:gap-4">
      {/* Mobile menu button */}
      <div className="block flex-none md:hidden flex-shrink-0">
        <Suspense fallback={null}>
          <MobileMenu menu={navItems} />
        </Suspense>
      </div>

      {/* Logo and brand name */}
      <Link
        href="/"
        prefetch={true}
        className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
      >
        <LogoSquare />
        <div className="hidden sm:block text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-white truncate">
          {SITE_NAME}
        </div>
      </Link>

      {/* Desktop navigation - centered */}
      {navItems.length ? (
        <ul className="hidden md:flex gap-6 lg:gap-10 items-center flex-1 justify-center">
          {navItems.map((item: any) => (
            <li key={item.title}>
              <Link
                href={item.path || item.url || '/'}
                prefetch={true}
                className="text-sm lg:text-base text-neutral-300 hover:text-[#00d4ff] transition-colors font-medium whitespace-nowrap"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Search and cart - right side */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
        <div className="hidden md:block">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <CartModal />
      </div>
    </nav>
  );
}
