'use client';
import { Orders, columnOrder } from '@/assets/data/order';
import { product } from '@/assets/data/product';
import CreateComponent from '@/components/create.coponent';
import TableView from '@/components/table.component';
import React from 'react';

type Props = {};

export default function CreateOrder({}: Props) {

  return (
    <>
      <CreateComponent products={product}  />
    </>
  );
}
