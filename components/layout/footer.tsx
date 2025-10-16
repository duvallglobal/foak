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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 md:px-4 min-[1320px]:px-0">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <Link className="flex items-center gap-2 text-white mb-4 hover:text-[#00d4ff] transition" href="/">
              <LogoSquare size="sm" />
              <span className="uppercase font-bold">{SITE_NAME}</span>
            </Link>
            <p className="text-neutral-400 text-sm">Discover unique treasures from auctioned storage units.</p>
          </div>

          {/* Store info section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Store</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <div>
                <p className="text-neutral-300 font-medium">Address</p>
                <p>West Point, GA</p>
              </div>
              <div>
                <p className="text-neutral-300 font-medium">Hours</p>
                <p>24/7 HOA</p>
              </div>
              <div>
                <p className="text-neutral-300 font-medium">Contact</p>
                <a href="tel:7065852195" className="hover:text-[#00d4ff] transition">
                  (706) 585-2195
                </a>
              </div>
            </div>
          </div>

          {/* Links section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
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
              <Link href="/about" className="text-neutral-400 hover:text-[#00d4ff] transition block">
                About Us
              </Link>
              <Link href="/contact" className="text-neutral-400 hover:text-[#00d4ff] transition block">
                Contact
              </Link>
            </div>
          </div>

          {/* Social section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://www.instagram.com/findsofallkinds.south/"
                className="text-neutral-400 hover:text-[#00d4ff] transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📷 Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/findsofallkinds.south/"
                className="text-neutral-400 hover:text-[#00d4ff] transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>👍 Facebook</span>
              </a>
              <a
                href="mailto:info@findsofallkinds.store"
                className="text-neutral-400 hover:text-[#00d4ff] transition flex items-center gap-2"
              >
                <span>✉️ Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-400">
            <p>
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#00d4ff] transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#00d4ff] transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
