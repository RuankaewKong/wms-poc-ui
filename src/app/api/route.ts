import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

type Props = {}

export async function GET(request:NextRequest) {
  const response = await fetch(
    `${process.env.WMS_SERVICE_API_BASE_URL}/api/v1/warehouse/getProduct`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return NextResponse.json(await response.json());
}

// pages/api/kerry.js
export  async function POST(response : Response) {
  try {
    const response = await fetch('https://poc-it.th.kerryexpress.com/ediwebapi_uat');
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching data from Kerry API:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
