import { NextRequest, NextResponse } from 'next/server';
import { getNewsSorted, filterNewsByType, paginateNews } from '@/lib/data';

const PAGE_SIZE = 6;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const type = searchParams.get('type') as 'news' | 'publication' | null;
  const pageParam = searchParams.get('page');
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  if (type && type !== 'news' && type !== 'publication') {
    return NextResponse.json(
      { error: 'Invalid type. Must be news or publication.' },
      { status: 400 }
    );
  }

  if (isNaN(page) || page < 1) {
    return NextResponse.json({ error: 'Invalid page number.' }, { status: 400 });
  }

  const all = getNewsSorted();
  const filtered = type ? filterNewsByType(type) : all;
  const result = paginateNews(filtered, page, PAGE_SIZE);

  return NextResponse.json(result);
}
