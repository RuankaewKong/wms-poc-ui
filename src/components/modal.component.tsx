'use client'
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
import React from 'react';

type Props = {};

const ModalView: React.FC = () => {
  const {isOpen} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque');
  const backdrops = ['opaque', 'blur', 'transparent'];
  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    // onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            variant="flat"
            color="warning"
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
            {b}
          </Button>
        ))}
      </div>
      <Modal isOpen={isOpen} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
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
