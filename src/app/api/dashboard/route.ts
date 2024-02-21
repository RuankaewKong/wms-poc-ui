import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') || 1;
  const pageSize = request.nextUrl.searchParams.get('pageSize') || 20;
  const query = new URLSearchParams({
    page: (+page + 1).toString(),
    limit: pageSize.toString(),
  }).toString();

  const response = await fetch(
    `${process.env.DASHBOARD_SERVICE_API_BASE_URL}/api/v1/dashboard/getMetaData`,
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

