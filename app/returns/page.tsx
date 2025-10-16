export const metadata = {
  title: 'Returns & Final Sale Policy',
  description: 'Returns and Final Sale Policy for Finds of all Kinds - South'
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-neutral-100">
      {/* Hero section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Returns & Final Sale Policy</h1>
          <p className="text-neutral-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#252525]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-neutral-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p>
                As a resale store specializing in secondhand and treasure-hunt items, most of our products are sold "as-is" and are generally final sale. We carefully inspect and describe all items to the best of our ability, but we understand that buying secondhand items online can sometimes involve uncertainties. Please read this policy carefully to understand our approach to returns and exchanges.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Final Sale Items</h2>
              <p>
                Most items in our store are final sale and cannot be returned or exchanged. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>All clothing and accessories (due to hygiene and wear)</li>
                <li>Used electronics and appliances (tested as working at time of sale)</li>
                <li>Furniture and large items (due to shipping and restocking costs)</li>
                <li>Collectibles, books, and media</li>
                <li>Items clearly marked as "final sale" or "as-is"</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Exceptions to Final Sale</h2>
              <p>
                In limited circumstances, we may consider returns or exchanges:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Defective on Arrival:</strong> If an item arrives damaged or significantly defective, please contact us within 48 hours of receipt with photos. We will evaluate the issue and determine if a replacement or refund is appropriate.</li>
                <li><strong>Incorrect Item Shipped:</strong> If we ship the wrong item, we will provide a prepaid return label and send the correct item at no additional cost.</li>
                <li><strong>Significant Misrepresentation:</strong> If an item's condition is significantly worse than described, please contact us within 48 hours with details and photos.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Return Process for Eligible Items</h2>
              <p>
                If your item qualifies for return under the exceptions above:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Contact us at info@findsofallkinds.store or call (706) 585-2195 within 48 hours of receipt</li>
                <li>Provide photos and a detailed description of the issue</li>
                <li>If approved, we will provide a prepaid shipping label</li>
                <li>Pack the item securely and ship it back within 14 days</li>
                <li>Upon receipt of the returned item in acceptable condition, we will process a refund or replacement within 7-10 business days</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Refund Timeline</h2>
              <p>
                Approved refunds will be processed to your original payment method within 7-10 business days of our receipt and verification of the returned item. Please allow an additional 3-5 business days for the refund to appear in your account, depending on your bank.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Condition of Returns</h2>
              <p>
                For returns to be accepted, items must be:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>In the same condition as received (except for documented defects)</li>
                <li>Securely packaged to prevent damage during transit</li>
                <li>Include all original parts and accessories</li>
                <li>Have proof of purchase (order number)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Non-Returnable Items</h2>
              <p>
                The following items are NEVER returnable:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Items purchased in-store at our West Point location</li>
                <li>Items purchased at estate sales or liquidation events</li>
                <li>Clearance or final sale items</li>
                <li>Items showing signs of use beyond normal wear</li>
                <li>Items where the customer has changed their mind about fit, style, or preference</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. In-Store Purchases</h2>
              <p>
                Items purchased at our physical store in West Point are final sale at the time of purchase. We recommend inspecting items carefully before completing your purchase. If you have concerns about condition or functionality, please speak with a staff member before leaving the store.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Shipping Damage</h2>
              <p>
                If your item arrives damaged due to shipping:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Report the damage within 48 hours of receipt</li>
                <li>Keep the original packaging and all materials</li>
                <li>Provide photos of the damage and the packaging</li>
                <li>We will file a claim with the carrier and provide a replacement or refund once resolved</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Exchanges</h2>
              <p>
                We generally do not offer exchanges due to the unique nature of our inventory. Each item is one-of-a-kind and once sold, similar items may not be available. If an item qualifies for return under our exceptions, a refund will be offered instead of an exchange.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Why This Policy?</h2>
              <p>
                Our final sale policy reflects the reality of resale retail:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Unique Inventory:</strong> Each item is one-of-a-kind; we cannot restock identical replacements</li>
                <li><strong>Cost Effectiveness:</strong> Keeping prices low requires limiting return processing costs</li>
                <li><strong>Fair Pricing:</strong> Our treasure-hunt pricing is based on accepting items as-is</li>
                <li><strong>Hygiene:</strong> Used clothing and items cannot be resold after return</li>
                <li><strong>Sustainability:</strong> Reducing return logistics supports our sustainable resale mission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Consumer Protection</h2>
              <p>
                While our policy is "as-is" final sale, we stand behind the quality of our merchandise. If you have a legitimate concern about a defect or misrepresentation, please contact us. We will work with you fairly and in good faith. Your satisfaction is important to us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p>
                Questions about our returns policy? Contact us:
              </p>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700 mt-4">
                <p className="mb-2"><strong>Finds of all Kinds - South</strong></p>
                <p className="mb-2">West Point, GA</p>
                <p className="mb-2">
                  Phone: <a href="tel:7065852195" className="text-[#00d4ff] hover:text-[#33e0ff]">(706) 585-2195</a>
                </p>
                <p className="mb-2">
                  Email: <a href="mailto:info@findsofallkinds.store" className="text-[#00d4ff] hover:text-[#33e0ff]">info@findsofallkinds.store</a>
                </p>
                <p className="text-sm mt-3 text-neutral-500">
                  Hours: 24/7 HOA (Home Owner's Association hours)
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Policy Changes</h2>
              <p>
                We reserve the right to modify this Returns & Final Sale Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website and services constitutes your acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
