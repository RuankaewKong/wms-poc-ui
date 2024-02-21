'use client';
import { columnOrderInfo } from '@/assets/data/order';
import React, { useEffect, useState } from 'react';
import ModalView from '@/components/modal.component';
import { OrderInfo } from '@/types/order.interface';
import OrderTable from '@/components/orderTable';

type Props = {};

export default function Order({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<OrderInfo | null>(null);
  const [orders, setOrders] = useState<OrderInfo[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/order`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        if (!data) {
          throw new Error('Empty response data');
        }
        setOrders(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    console.log(orders);
  });

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };
  return (
    <>
      {orders ? (
        <OrderTable data={orders} title={columnOrderInfo} page="Delivery" onRowClick={openModal} />
      ) : (
        <div>Loading...</div>
      )}
      {/* <TableView title={columnOrderInfo} data={orders} page='Order Delivery' onRowClick={openModal}></TableView> */}
      <ModalView
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Delivery"
        page="Order"
        selectedProduct={selectedItem}
        selectedOrder={null}
      />
    </>
  );
}
