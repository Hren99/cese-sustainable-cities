import { NextRequest, NextResponse } from 'next/server';
import { getResearch, filterResearchByFocus, paginateResearch } from '@/lib/data';
import type { FocusArea } from '@/data/faculty';

const PAGE_SIZE = 6;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const focus = searchParams.get('focus') as FocusArea | null;
  const pageParam = searchParams.get('page');
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const validFocus = ['air', 'water', 'soil'];

  if (focus && !validFocus.includes(focus)) {
    return NextResponse.json(
      { error: 'Invalid focus area. Must be air, water, or soil.' },
      { status: 400 }
    );
  }

  if (isNaN(page) || page < 1) {
    return NextResponse.json({ error: 'Invalid page number.' }, { status: 400 });
  }

  const filtered = focus ? filterResearchByFocus(focus) : getResearch();
  const result = paginateResearch(filtered, page, PAGE_SIZE);

  return NextResponse.json(result);
}
