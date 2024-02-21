import { product } from '@/assets/data/product';
import { NextResponse } from 'next/server';
import React from 'react';

type Props = {};

export async function GET() {

  const response = await fetch(
    `${process.env.WMS_SERVICE_API_BASE_URL}/api/v1/warehouse/getProduct`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if(!response.ok)
  return NextResponse.json(await response.json(), { status: response.status })

  return NextResponse.json(await response.json());
}

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json(data);
}
