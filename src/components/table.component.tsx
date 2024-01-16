import Product from '@/app/wms/product/page';
import { columns, product, statusOptions } from '@/assets/json/product';
import { ChevronDownIcon } from '@/icon/ChevronDownIcon';
import { PlusIcon } from '@/icon/PlusIcon';
import { SearchIcon } from '@/icon/SearchIcon';
import { VerticalDotsIcon } from '@/icon/VerticalDotsIcon';
import { capitalize } from '@/utils/utils';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Chip,
  ChipProps,
} from '@nextui-org/react';

import React, { useState } from 'react';

type Product = (typeof product)[0];


const statusColorMap: Record<string, ChipProps['color']> = {
  Active: 'success',
  Paused: 'danger',
  Vacation: 'warning',
};

const TableView: React.FC = (data) => {
  type Selection = Set<string> | "all" |any;

  const [search, setSearch] = React.useState('');
  const hasSearchFilter = Boolean(search);
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const filteredItems = React.useMemo(() => {
    let filteredProducts = [...product];

    if (hasSearchFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.bookName.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (statusFilter !=='all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredProducts = filteredProducts.filter((product) =>
        Array.from(statusFilter).includes(product.status)
      );
    }

    return filteredProducts;
  }, [product, search, statusFilter]);

  const renderCell = React.useCallback((product: Product, columnKey: React.Key) => {
    const cellValue = product[columnKey as keyof Product];

    switch (columnKey) {
      case 'status':
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[product.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button
                  isIconOnly
                  color="secondary"
                  radius="full"
                  size="sm"
                  className="flex justify-center"
                >
                  <VerticalDotsIcon className="text-default-400 " />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem >View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setSearch(value);
    } else {
      setSearch('');
    }
  }, []);

  return (
    <div className="flex flex-col justify-end gap-4 m-5">
      <div className="flex justify-between">
        <div className="flex gap-3 w-2/5">
          <Input
            classNames={{
              base: 'w-auto sm:max-w-[44%]',
              inputWrapper: 'border-1',
            }}
            placeholder="Search by name..."
            size="md"
            labelPlacement="outside"
            color="primary"
            value={search}
            endContent={<SearchIcon />}
            onClear={() => setSearch('')}
            onValueChange={onSearchChange}
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
                selectedKeys={statusFilter}
                disallowEmptySelection
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.key)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <Table
        aria-label="Example table with dynamic content"
        classNames={{
          base: 'max-h-[850px]',
          table: 'min-h-[20px]',

        }}
        className="h-[800px]"
        isHeaderSticky
        // onSelectionChange={setSelectedKeys}
        selectedKeys={selectedKeys}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody
          emptyContent={'No products found'}
          items={filteredItems}
          className="overflow-hidden "
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;