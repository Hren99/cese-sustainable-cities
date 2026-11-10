import { NextRequest, NextResponse } from 'next/server';
import { getResearchBySlug } from '@/lib/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getResearchBySlug(slug);

  if (!project) {
    return NextResponse.json({ error: 'Research project not found.' }, { status: 404 });
  }

  return NextResponse.json(project);
}
