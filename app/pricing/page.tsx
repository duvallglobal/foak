import { PricingDashboard3D } from 'components/pricing';

export const metadata = {
  title: 'Market Pricing',
  description: '3D pricing analysis and comparables'
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PricingDashboard3D
        productData={{
          product_name: 'iPhone 13 Pro',
          brand: 'Apple',
          condition: 'used'
        }}
      />
    </div>
  );
}
