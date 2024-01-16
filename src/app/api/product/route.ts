import Product from '@/app/wms/product/page';
import { product } from '@/assets/json/product';

import { NextRequest } from 'next/server';
import React from 'react';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    // const id = searchParams.getAll('product');
    // if(!id) return Response.json({error: 'ID is required'})
    // const data = await request.json()
  return Response.json(product)
  } catch (error){
    return Response.json({error});
  }
}
