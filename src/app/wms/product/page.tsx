'use client';
import { columns, product, statusOptions } from '@/assets/data/product';
import ModalView from '@/components/modal.component';
import TableView from '@/components/table.component';
import { SearchIcon } from '@/icon/SearchIcon';
import { Product } from '@/types/product.interface';
import { useDisclosure } from '@nextui-org/react';
import { useScroll } from 'framer-motion';
// import TableView from '@/components/table.component';

import React, { useState } from 'react';

type Data = (typeof product)[0];

export default function Product() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product:any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };
  return (
    <>
      <TableView title={columns} data={product} page='Product' onRowClick={openModal}></TableView>
      <ModalView
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Product"
        page="Product"
        selectedProduct={selectedProduct}
        selectedOrder={null}
      />
    </>
  );
}
