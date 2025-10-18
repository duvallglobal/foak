import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const errorData = await request.json();
    
    // Log error for development/debugging
    console.error('Client Error Report:', {
      message: errorData.message,
      component: errorData.component,
      url: errorData.url,
      timestamp: errorData.timestamp,
      userAgent: errorData.userAgent
    });

    // In production, you might want to:
    // 1. Store in database
    // 2. Send to external monitoring service
    // 3. Send notifications for critical errors
    
    if (process.env.NODE_ENV === 'production') {
      // Example: Store in database or send to monitoring service
      // await storeErrorInDatabase(errorData);
      // await sendToMonitoringService(errorData);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Failed to process error report:', error);
    return NextResponse.json(
      { error: 'Failed to process error report' },
      { status: 500 }
    );
  }
}