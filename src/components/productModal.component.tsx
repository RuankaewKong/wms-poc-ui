import { Product } from '@/types/product.interface';
import { Button } from '@nextui-org/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';

interface ProductModalProps {
  products: Product[];
  isOpen: boolean;
  onSelectProduct: (product: Product) => void;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({isOpen, products, onSelectProduct, onClose }) => {
  console.log('Rendering ProductModal');
  const { onOpenChange } = useDisclosure();

  const handleProductClick = (product: Product) => {
    onSelectProduct(product);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} size="2xl" className='h-[550px]'>
        <ModalContent>
          {(onclose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Product List</ModalHeader>
              <ModalBody className='overflow-auto'>
                {/* Render your list of products */}
                <ul>
                  {products.map((product) => (
                    <li key={product.id} onClick={() => handleProductClick(product)}>
                      <strong>{product.bookName}</strong> - Quantity: {product.quantity}
                    </li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => { onClose(); onclose(); }}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductModal;
