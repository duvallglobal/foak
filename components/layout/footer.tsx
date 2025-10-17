import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-400 bg-[#1a1a1a] border-t border-neutral-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Brand section */}
          <div className="col-span-1 space-y-2">
            <Link className="flex items-center gap-2 text-white mb-4 hover:text-[#00d4ff] transition" href="/">
              <LogoSquare size="sm" />
              <span className="uppercase font-bold text-xs sm:text-sm truncate">{SITE_NAME}</span>
            </Link>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Treasure hunting made simple. Uncommon finds, unexpected value—right here in West Point.</p>
          </div>

          {/* Store info section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">Store</h3>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <div>
                <p className="text-neutral-300 font-medium mb-1 text-xs sm:text-sm">Address</p>
                <p className="text-xs sm:text-sm">West Point, GA</p>
              </div>
              <div>
                <p className="text-neutral-300 font-medium mb-1 text-xs sm:text-sm">Hours</p>
                <p className="text-xs sm:text-sm">7 AM - 9 PM</p>
                <p className="text-xs sm:text-sm">Mon-Sun</p>
              </div>
              <div>
                <p className="text-neutral-300 font-medium mb-1 text-xs sm:text-sm">Contact</p>
                <a href="tel:7065852195" className="hover:text-[#00d4ff] transition text-xs sm:text-sm">
                  (706) 585-2195
                </a>
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">Quick Links</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <Suspense
                fallback={
                  <div className="flex flex-col gap-2">
                    <div className={skeleton} />
                    <div className={skeleton} />
                  </div>
                }
              >
                <FooterMenu menu={menu} />
              </Suspense>
              <Link href="/about" className="text-neutral-400 hover:text-[#00d4ff] transition block text-xs sm:text-sm">
                About Us
              </Link>
              <Link href="/contact" className="text-neutral-400 hover:text-[#00d4ff] transition block text-xs sm:text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Social section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">Follow Us</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href="https://www.instagram.com/findsofallkinds.south/"
                className="text-neutral-400 hover:text-[#00d4ff] transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs sm:text-sm">📷 Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/findsofallkinds.south/"
                className="text-neutral-400 hover:text-[#00d4ff] transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs sm:text-sm">👍 Facebook</span>
              </a>
              <a
                href="mailto:info@findsofallkinds.store"
                className="text-neutral-400 hover:text-[#00d4ff] transition flex items-center gap-2"
              >
                <span className="text-xs sm:text-sm">✉️ Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-neutral-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-400">
            <p className="whitespace-nowrap text-xs sm:text-sm">
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <Link href="/privacy" className="hover:text-[#00d4ff] transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#00d4ff] transition">
                Terms of Service
              </Link>
              <Link href="/returns" className="hover:text-[#00d4ff] transition">
                Returns Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
