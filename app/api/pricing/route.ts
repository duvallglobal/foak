import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const product = body?.product_name ?? '';
    if (typeof product !== 'string' || product.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Invalid product_name' }, { status: 400 });
    }

    const priceRange = {
      low: 49,
      median: 129,
      high: 299,
      average: 158
    };

    const comparables = [
      { title: `${product} - excellent condition`, price: 135, link: 'https://example.com/ebay', source: 'ebay', soldDate: new Date().toISOString(), condition: 'Used' },
      { title: `${product} - fair condition`, price: 95, link: 'https://example.com/google', source: 'google', condition: 'Used' },
      { title: `${product} - new sealed`, price: 249, link: 'https://example.com/scrapingdog', source: 'scrapingdog', condition: 'New' }
    ];

    const data = {
      priceRange,
      confidence: 'medium' as const,
      totalComparables: comparables.length,
      dataSources: ['ebay', 'google', 'scrapingdog'],
      comparables
    };

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to get pricing' }, { status: 500 });
  }
}
