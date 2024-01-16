'use client';
import { columns, product } from '@/assets/json/product';
import TableView from '@/components/table.component';
import { SearchIcon } from '@/icon/SearchIcon';
import { Product } from '@/types/product.interface';
// import TableView from '@/components/table.component';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Input,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownItem,
  DropdownMenu,
  ChipProps,
  SortDescriptor,
} from '@nextui-org/react';
import React from 'react';



export default function Product() {

  return (
    <div><TableView/></div>
  );
}
