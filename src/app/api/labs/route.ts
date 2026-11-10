import { NextRequest, NextResponse } from 'next/server';
import { getLabs, filterLabsByFocus } from '@/lib/data';
import type { FocusArea } from '@/data/faculty';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const focus = searchParams.get('focus') as FocusArea | null;

  const validFocus = ['air', 'water', 'soil'];

  if (focus && !validFocus.includes(focus)) {
    return NextResponse.json(
      { error: 'Invalid focus area. Must be air, water, or soil.' },
      { status: 400 }
    );
  }

  const data = focus ? filterLabsByFocus(focus) : getLabs();

  return NextResponse.json({ data, total: data.length });
}
