import { NextRequest, NextResponse } from 'next/server';
import { getLabBySlug } from '@/lib/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);

  if (!lab) {
    return NextResponse.json({ error: 'Lab not found.' }, { status: 404 });
  }

  return NextResponse.json(lab);
}
