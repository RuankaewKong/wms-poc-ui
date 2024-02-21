import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') || 1;
  const pageSize = request.nextUrl.searchParams.get('pageSize') || 20;
  const query = new URLSearchParams({
    page: (+page + 1).toString(),
    limit: pageSize.toString(),
  }).toString();

  const response = await fetch(
    `${process.env.WMS_SERVICE_API_BASE_URL}/api/v1/warehouse/getOrder`,
    {
      method: 'GET',
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

  const response = await fetch(
    `${process.env.WMS_SERVICE_API_BASE_URL}api/v1/warehouse/shipment_order`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body),
    },
  );

  if (!response.ok)
    return NextResponse.json(await response.json(), {
      status: response.status,
    });

  return NextResponse.json(await response.json());
}
