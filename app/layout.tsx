import { CartProvider } from 'components/cart/cart-context';
import ClientOnly from 'components/client-only';
import ErrorBoundary from 'components/error-boundary';
import { Navbar } from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import { WelcomeToast } from 'components/welcome-toast';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { baseUrl } from 'lib/utils';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className="bg-[#1a1a1a] text-neutral-100 selection:bg-[#00d4ff] selection:text-black">
        <ErrorBoundary componentName="CartProvider">
          <CartProvider cartPromise={cart}>
            <ErrorBoundary componentName="Navbar">
              <Navbar />
            </ErrorBoundary>
            <main>
              {children}
              <ClientOnly>
                <Toaster closeButton />
                <WelcomeToast />
              </ClientOnly>
            </main>
            <Footer />
          </CartProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
