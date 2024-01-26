import { animals } from '@/assets/data/data';
import { PlusIcon } from '@/icon/PlusIcon';
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { columnOrder, columns, product } from '@/assets/data/product';
import { Product } from '@/types/product.interface';
import ProductModal from './productModal.component';
import { columnOrderItem } from '@/assets/data/orderItem';
import { AddressInfo, Order, OrderItem } from '@/types/order.interface';

interface ProductItem {
  products: Product[];
}

const CreateComponent: React.FC<ProductItem> = ({ products }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [order, setOrder] = useState<Order>({
    id: '',
    orderId: '',
    addressInfo: [
      {
        name: '',
        street: '',
        district: '',
        city: '',
        province: '',
        postcode: '',
        phone: '',
      },
    ],
    orderItem: [],
    quantity: 0,
    amount: 0,
    status: '',
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: new Date(),
  });
  const { isOpen, onOpen } = useDisclosure();

  const openModal = () => {
    console.log('Opening modal');
    setModalOpen(true);
    onOpen();
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  //
  const handleProductSelection = (product: Product) => {
    const orderItem: OrderItem = {
      id: order.orderItem.length + 1, // Assigning a new ID based on the length of existing order items
      nameBook: product.bookName,
      price: product.price,
      qty: 1,
      total: product.price,
    };

    setOrder((prevOrder) => ({
      ...prevOrder,
      orderItem: [...prevOrder.orderItem, orderItem],
      quantity: prevOrder.quantity + 1,
      amount: prevOrder.amount + orderItem.total,
    }));
  };

  const handleQuantityChange = (orderItem: OrderItem, newQuantity: number) => {
    const updatedOrderItems = order.orderItem.map((item) =>
      item.id === orderItem.id
        ? { ...item, qty: newQuantity, total: newQuantity * item.price }
        : item
    );

    setOrder((prevOrder) => ({
      ...prevOrder,
      orderItem: updatedOrderItems,
      quantity: updatedOrderItems.reduce((sum, item) => sum + item.qty, 0),
      amount: updatedOrderItems.reduce((sum, item) => sum + item.total, 0),
    }));
  };

  const handleRemoveProduct = (index: number) => {
    const updatedOrderItems = [...order.orderItem];
    const removedItem = updatedOrderItems.splice(index, 1)[0];

    setOrder((prevOrder) => ({
      ...prevOrder,
      orderItem: updatedOrderItems,
      quantity: prevOrder.quantity - removedItem.qty,
      amount: prevOrder.amount - removedItem.total,
    }));
  };
  const handleSave = () => {
    console.log('Saving the form', order);
    setOrder({
      id: '',
      orderId: '',
      addressInfo: [
        {
          name: '',
          street: '',
          district: '',
          city: '',
          province: '',
          postcode: '',
          phone: '',
        },
      ],
      orderItem: [],
      quantity: 0,
      amount: 0,
      status: '',
      createAt: new Date(),
      updateAt: new Date(),
      deleteAt: new Date(),
    })
  };

  const calculateTotal = (orderItems: OrderItem[]) => {
    return orderItems.reduce((total, item) => total + item.total, 0);
  };

  const handleAddressInfoChange = (field: keyof (typeof order.addressInfo)[0], value: string) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      addressInfo: [
        {
          ...prevOrder.addressInfo[0],
          [field]: value,
        },
      ],
    }));
  };
  return (
    <>
      <div className="flex flex-col gap-4 m-5 ">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col justify-start ">
              <Breadcrumbs>
                <BreadcrumbItem>Order</BreadcrumbItem>
                <BreadcrumbItem>Create Order</BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <div className="h-[820px] rounded-2xl bg-white p-5 overflow-auto">
          <div className=" justify-start font-bold">General Information</div>
          <div className="flex justify-start m-5">
            <div className="flex flex-row">
              <div className="flex flex-col mr-10">
                <Input
                  className="w-unit-7xl"
                  size="lg"
                  label="ชื่อ-นามสกุล"
                  placeholder="ชื่อ-นามสกุล"
                  labelPlacement="outside"
                  value={order.addressInfo[0].name}
                  onChange={(e) => handleAddressInfoChange('name', e.target.value)}
                  isRequired
                />
              </div>
              <div className="flex flex-col mr-10">
                <Input
                  className="w-unit-6xl"
                  size="lg"
                  type="tel"
                  label="เบอร์โทรศัพท์"
                  placeholder="เบอร์โทรศัพท์"
                  labelPlacement="outside"
                  value={order.addressInfo[0].phone}
                  onChange={(e) => handleAddressInfoChange('phone', e.target.value)}
                  isRequired
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start m-5">
            <div className="flex flex-col mr-10">
              <Input
                className="w-unit-7xl"
                size="lg"
                type="string"
                label="ที่อยู่"
                placeholder="ที่อยู่"
                labelPlacement="outside"
                value={order.addressInfo[0].street}
                onChange={(e) => handleAddressInfoChange('street', e.target.value)}
                isRequired
              />
              {/* <Select
                label="Select an animal"
                labelPlacement="outside"
                size="lg"
                className="max-w-xs w-unit-7xl"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select> */}
            </div>
            <div className="flex flex-col mr-10">
              <Input
                className="w-unit-6xl"
                size="lg"
                type=""
                label="ตำบล"
                placeholder="ตำบล"
                labelPlacement="outside"
                value={order.addressInfo[0].district}
                onChange={(e) => handleAddressInfoChange('district', e.target.value)}
                isRequired
              />
            </div>
            <div className="flex flex-col mr-5">
              <Input
                className="w-unit-7xl"
                size="lg"
                type="string"
                label="อำเภอ"
                placeholder="อำเภอ"
                labelPlacement="outside"
                value={order.addressInfo[0].city}
                onChange={(e) => handleAddressInfoChange('city', e.target.value)}
                isRequired
              />
            </div>
          </div>
          <div className="flex justify-start m-5">
            <div className="flex flex-col mr-5">
              <Input
                className="w-unit-6xl"
                size="lg"
                type="string"
                label="จังหวัด"
                placeholder="จังหวัด"
                labelPlacement="outside"
                value={order.addressInfo[0].province}
                onChange={(e) => handleAddressInfoChange('province', e.target.value)}
                isRequired
              />
            </div>
            <div className="flex flex-col mr-5">
              <Input
                className="w-unit-6xl"
                size="lg"
                type=""
                label="รหัสไปรษณีย์"
                placeholder="รหัสไปรษณีย์"
                labelPlacement="outside"
                value={order.addressInfo[0].postcode}
                onChange={(e) => handleAddressInfoChange('postcode', e.target.value)}
                isRequired
              />
            </div>
          </div>
          <div className="flex justify-between ">
            <div className=" justify-evenly justify-items-center font-bold mt-5">
              Order Information
            </div>
            <Button
              className="w-unit-3xl flex justify-center mx-5"
              endContent={<PlusIcon className="text-xl" />}
              variant="flat"
              onPress={openModal}
            >
              ADD
            </Button>
            {isModalOpen && (
              <ProductModal
                isOpen={isOpen}
                products={product}
                onSelectProduct={handleProductSelection}
                onClose={closeModal}
              />
            )}
          </div>
          <div className="flex m-5 ">
            <Table
              classNames={{
                base: 'max-h-[250px]',
                table: 'min-h-[20px]',
              }}
            >
              <TableHeader columns={columnOrderItem}>
                {(col) => <TableColumn key={col.key}>{col.label}</TableColumn>}
              </TableHeader>
              <TableBody emptyContent={'No item'} items={order.orderItem as OrderItem[]}>
                {order.orderItem.map((orderItem: OrderItem, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{orderItem.nameBook}</TableCell>
                    <TableCell>{orderItem.price}</TableCell>
                    <TableCell>
                      <Input
                        className="w-[70px]"
                        type="number"
                        size="sm"
                        value={orderItem.qty.toString()}
                        onChange={(e) => handleQuantityChange(orderItem, +e.target.value)}
                      />
                    </TableCell>
                    <TableCell>{orderItem.total}</TableCell>
                    <TableCell>
                      <Button variant="flat" size="sm" onPress={() => handleRemoveProduct(index)}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-start">
            <div className="font-bold text-lg">
              Total Price: {calculateTotal(order.orderItem)} Bath
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="w-unit-3xl flex mx-5" color="success" onPress={handleSave}>
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateComponent;
