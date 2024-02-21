import page from '@/app/page';
import { statusOrder } from '@/assets/data/order';
import { statusOptions } from '@/assets/data/product';
import { ChevronDownIcon } from '@/icon/ChevronDownIcon';
import { PlusIcon } from '@/icon/PlusIcon';
import { SearchIcon } from '@/icon/SearchIcon';
import { OrderInfo } from '@/types/order.interface';
import { capitalize } from '@/utils/utils';
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Breadcrumbs, BreadcrumbItem, Input, useDisclosure } from '@nextui-org/react';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table';
import { it } from 'node:test';
import React, { useState } from 'react';

interface Header {
  key: string;
  label: string;
}
interface Props {
  title: Header[];
  data: OrderInfo[];
  page: string;
  onRowClick: (item: any) => void;
}

const OrderTable: React.FC<Props> = ({ data, title, page, onRowClick }) => {
  const { onOpen } = useDisclosure();
  const [search, setSearch] = useState('');
  const hasSearchFilter = Boolean(search);
   const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['text']));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );
  const handleStatusChange = (newStatus: string) => {
    setSelectedStatus(newStatus);
    // Implement your logic to handle status change here
    // For example, you can call the callback function onStatusChange to update the status in the backend
    // onStatusChange(orderId, newStatus);
  };

  return (
    <>
      <div className="flex flex-col gap-4 m-5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className=" justify-start justify-evenly text-3xl font-bold">{page}</div>
            <div className="flex flex-col justify-start justify-evenly">
              <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Delivery</BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex gap-3">
              <Input
                classNames={{
                  base: 'w-auto sm:max-w-[44%]',
                  inputWrapper: 'border-1',
                }}
                placeholder="Search by name..."
                size="md"
                labelPlacement="outside"
                color="primary"
                endContent={<SearchIcon />}
              />

              <div className="flex">
                <Dropdown>
                  <DropdownTrigger className="hidden sm:flex">
                    <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                      Status
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Table Columns"
                    closeOnSelect={false}
                    disallowEmptySelection
                    selectionMode="multiple"
                  >
                    {statusOptions.map((status) => (
                      <DropdownItem key={status.uid} className="capitalize">
                        {capitalize(status.key)}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="flex">
                <Button endContent={<PlusIcon className="text-small" />} variant="flat">
                  Add New
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Table
          aria-label="Example table with dynamic content"
          classNames={{
            base: 'max-h-[850px]',
            table: 'min-h-[20px]',
          }}
          className="h-[780px]"
          isHeaderSticky
        >
          <TableHeader columns={title}>
            {title &&
              title.map((header) => <TableColumn key={header.key}>{header.label}</TableColumn>)}
          </TableHeader>

          <TableBody emptyContent={'No products found'} className="overflow-hidden">
            {data &&
              data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.orderId}</TableCell>
                  <TableCell>
                    {item.addressInfo.name} {item.addressInfo.street} {item.addressInfo.district}{' '}
                    {item.addressInfo.city} {item.addressInfo.province} {item.addressInfo.postcode}{' '}
                    {item.addressInfo.phone}
                  </TableCell>
                  <TableCell>
                    {item.orderItem.products.map((product) => product.bookName).join(', ')}
                  </TableCell>
                  <TableCell>{item.orderItem.qty}</TableCell>
                  <TableCell>{item.orderItem.total}</TableCell>
                  <TableCell>
                    <Dropdown>
                      <DropdownTrigger className="hidden sm:flex">
                        <Button variant="bordered" className="capitalize">
                        {selectedValue || item.status}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Table Columns"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                      >
                        {statusOrder.map((status) => (
                          <DropdownItem key={status.uid} className="capitalize">
                            {capitalize(status.key)}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </TableCell>
                  <TableCell>{item.createAt}</TableCell>
                  <TableCell>{item.updateAt}</TableCell>
                  <TableCell>{item.deleteAt}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default OrderTable;
