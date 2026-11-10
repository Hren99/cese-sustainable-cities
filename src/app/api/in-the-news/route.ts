import { NextResponse } from 'next/server';
import { fetchInTheNews } from '@/lib/googleNews';

export async function GET() {
  try {
    const result = await fetchInTheNews();
    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch {
    return NextResponse.json(
      { articles: [], fetchedAt: new Date().toISOString(), error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
