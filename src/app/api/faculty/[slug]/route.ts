import { NextRequest, NextResponse } from 'next/server';
import { getFacultyBySlug } from '@/lib/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const member = getFacultyBySlug(slug);

  if (!member) {
    return NextResponse.json({ error: 'Faculty member not found.' }, { status: 404 });
  }

  return NextResponse.json(member);
}
