export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Finds of all Kinds - South'
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-neutral-100">
      {/* Hero section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-neutral-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#252525]">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-neutral-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                Finds of all Kinds - South ("we," "us," "our," or "Company") operates the website and our physical storefront in West Point, Georgia. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website, make a purchase, or interact with us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We collect information in various ways:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Information You Provide:</strong> We collect information you provide directly, such as when you place an order, sign up for our newsletter, or contact us. This may include your name, email address, phone number, mailing address, and payment information.</li>
                <li><strong>Automatically Collected Information:</strong> When you visit our website, we automatically collect certain information including IP address, browser type, pages visited, and referring URL through cookies and similar tracking technologies.</li>
                <li><strong>Third-Party Information:</strong> We may receive information about you from third parties, including payment processors and shipping carriers.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To process your orders and send related information</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send promotional emails and marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To prevent fraud and ensure security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Sharing of Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. However, we may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Service providers who assist us in operating our website and conducting our business</li>
                <li>Shipping carriers to fulfill your orders</li>
                <li>Payment processors to securely process transactions</li>
                <li>Law enforcement if required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies, web beacons, and similar technologies to track activity on our website and improve your experience. You may disable cookies through your browser settings, but this may limit your ability to use certain features of our site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
              <p>You have certain rights regarding your information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>You may request access to your personal information</li>
                <li>You may request correction of inaccurate information</li>
                <li>You may opt-out of marketing communications</li>
                <li>You may request deletion of your information (subject to certain exceptions)</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact us at info@findsofallkinds.store or call (706) 585-2195.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. Please review their privacy policies before providing your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. California Privacy Rights</h2>
              <p>
                Under the California Consumer Privacy Act (CCPA), California residents have certain rights to know what personal information is collected, used, and shared. Please contact us for details on exercising these rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and will be effective as soon as it is accessible. Please review this Privacy Policy periodically to stay informed of how we protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700 mt-4">
                <p className="mb-2"><strong>Finds of all Kinds - South</strong></p>
                <p className="mb-2">West Point, GA</p>
                <p className="mb-2">Phone: <a href="tel:7065852195" className="text-[#00d4ff] hover:text-[#33e0ff]">(706) 585-2195</a></p>
                <p>Email: <a href="mailto:info@findsofallkinds.store" className="text-[#00d4ff] hover:text-[#33e0ff]">info@findsofallkinds.store</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
