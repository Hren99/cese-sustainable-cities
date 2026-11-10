import { NextRequest, NextResponse } from 'next/server';
import { getNewsBySlug } from '@/lib/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return NextResponse.json({ error: 'News item not found.' }, { status: 404 });
  }

  return NextResponse.json(item);
}
