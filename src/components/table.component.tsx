import Product from '@/app/wms/product/page';
import { columns, product, statusOptions } from '@/assets/data/product';
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
  useDisclosure,
  BreadcrumbItem,
  Breadcrumbs,
  Link,
} from '@nextui-org/react';

import React, { use, useState } from 'react';

const statusColorMap: Record<string, ChipProps['color']> = {
  Active: 'success',
  Paused: 'danger',
  Vacation: 'warning',
};

interface Header {
  key: string;
  label: string;
}

interface TableProps<T> {
  title: Header[];
  data: T[];
  page: string;
  onRowClick: (item: T) => void;
}

export function TableView<T>({ title, data, page, onRowClick }: TableProps<T>) {
  type Selection = Set<string> | 'all' | any;
  const { onOpen } = useDisclosure();

  const [search, setSearch] = React.useState('');
  const hasSearchFilter = Boolean(search);
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const filteredItems = React.useMemo(() => {
    let filteredData = [...data];

    if (hasSearchFilter) {
      filteredData = filteredData.filter((item) =>
        item.bookName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredData = filteredData.filter((item) => Array.from(statusFilter).includes(item.status));
    }

    return filteredData;
  }, [data, search, statusFilter]);
  // Function to handle row click
  const handleRowClick = (item: T) => {
    onRowClick(item);
    onOpen(); // Open the modal
  };

  const renderCell = React.useCallback((item: T, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof T];

    switch (columnKey) {
      case 'status':
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[item.status]}
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
                <DropdownItem onPress={() => handleRowClick(item)}>View</DropdownItem>
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
    <div className="flex flex-col gap-4 m-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className=" justify-start justify-evenly text-3xl font-bold">{page}</div>
          <div className="flex flex-col justify-start justify-evenly">
            <Breadcrumbs>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Product</BreadcrumbItem>
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
        onSelectionChange={setSelectedKeys}
        selectedKeys={selectedKeys}
      >
        <TableHeader columns={title}>
          {title &&
            title.map((header) => <TableColumn key={header.key}>{header.label}</TableColumn>)}
        </TableHeader>

        <TableBody
          emptyContent={'No products found'}
          items={filteredItems}
          className="overflow-hidden"
        >
          {data.map((item,index) => (
            <TableRow key={index}>
              {(col) => <TableCell>{renderCell(item, col)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
