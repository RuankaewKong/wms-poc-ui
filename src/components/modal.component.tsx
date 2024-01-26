'use client';
import { Order } from '@/types/order.interface';
import { Product } from '@/types/product.interface';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { useDisclosure } from '@nextui-org/react';
import { type } from 'os';
import { title } from 'process';
import React, { Children, ReactNode } from 'react';

type ModalProps = {
  // children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  page: string;
  selectedProduct: Product | null;
  selectedOrder: Order|null


};

const ModalView: React.FC<ModalProps> = ({ page, isOpen, onClose, title, selectedProduct,selectedOrder }) => {
  const { onOpenChange } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onclose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
              {page === 'Product' && selectedProduct && (
                <div className='flex'>
                  <div className="flex-row">
                    <p>Barcode: {selectedProduct.barcode}</p>
                    <p>Book Name: {selectedProduct.bookName}</p>
                  </div>
                  <div className="ml-3 flex-row">
                    <p>Book Id: {selectedProduct.bookNo}</p>
                    <p>Quantity: {selectedProduct.quantity}</p>
                  </div>
                </div>
              )}
              {page === 'Delivery' && selectedOrder?.addressInfo?.[0]?.name && (
                <div className='flex'>
                  <div className="flex-row">
                    <>{console. log(selectedOrder)
                    }</>
                    <p>Name: {selectedOrder.addressInfo[0].name}</p>
                    <p>Item: {selectedOrder.orderItem[0].nameBook}</p>
                    <p>Quantity: {selectedOrder.quantity}</p>
                    <p>Amount: {selectedOrder.amount}</p>
                  </div>
                  {/* <div className="ml-3 flex-row">

                  </div> */}
                </div>
              )}
            </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                    onclose();
                  }}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    onclose();
                  }}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalView;
