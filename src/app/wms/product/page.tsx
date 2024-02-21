'use client';
import { columns, product, statusOptions } from '@/assets/data/product';
import ModalView from '@/components/modal.component';
import TableView from '@/components/table.component';
import { SearchIcon } from '@/icon/SearchIcon';
import { InProduct } from '@/types/product.interface';
import { useDisclosure } from '@nextui-org/react';
import { log } from 'console';
import { useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
// import TableView from '@/components/table.component';

import React, { useEffect, useState } from 'react';

type Data = (typeof product)[0];

const Product = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<InProduct | null>(null);
  const [products, setProducts] = useState<InProduct[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/product`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        if (!data) {
          throw new Error('Empty response data');
        }
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    // console.log(products);
  });

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };
  return (
    <>
    {products ? (
        <TableView title={columns} data={products} page='Product' onRowClick={openModal}></TableView>
      ) : (
        <div>Loading...</div>
      )}
      <ModalView
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Product"
        page="Product"
        selectedProduct={selectedProduct}
        selectedOrder={null}
      />

      {/* <TableView title={columns} data={products} page='Product' onRowClick={openModal}></TableView>
      <ModalView
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Product"
        page="Product"
        selectedProduct={selectedProduct}
        selectedOrder={null}
      /> */}
    </>
  );
};

export default Product;

{/* {products ? (
        <div>
          {/* Render your TableView component here */}
      //     {products.map((product) => (
      //       <div key={product.id} onClick={() => openModal(product)}>
      //         {product.bookName}
      //       </div>
      //     ))}
      //   </div>
      // ) : (
      //   <div>Loading...</div>
      // )} */}
