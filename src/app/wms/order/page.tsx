'use client';
import { Orders, columnOrder } from '@/assets/data/order';
import { product } from '@/assets/data/product';
import CreateComponent from '@/components/create.coponent';
import TableView from '@/components/table.component';
import React, { useState } from 'react';
import Product from '../product/page';
import ModalView from '@/components/modal.component';

type Props = {};

export default function Order({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item:any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };
  return (
    <>
      <TableView title={columnOrder} data={Orders} page='Delivery' onRowClick={openModal}></TableView>
      <ModalView
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Delivery"
        page="Delivery"
        selectedProduct={null}
        selectedOrder={selectedItem}
      />
    </>
  );
}
