import { product } from '@/assets/data/product';
import { NextResponse } from 'next/server';
import React from 'react';

type Props = {};

export async function GET(request: Request, {params}: {params: {id: string}}) {
  return Response.json({data: `GET Product by ${params.id} APIs`});
}

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json(data);
}
