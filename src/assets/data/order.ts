import { OrderInfo } from '@/types/order.interface';

const columnOrderInfo = [
  {
    key: 'id',
    label: 'NO.',
  },

  {
    key: 'orderId',
    label: 'Order ID.',
  },
  {
    key: 'addressInfo',
    label: 'addressInfo',
  },
  {
    key: 'orderItem',
    label: 'orderItem',
  },
  {
    key: 'quantity',
    label: 'Quantity',
  },
  {
    key: 'amount',
    label: 'amount',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'createAt',
    label: 'Create At',
  },
  {
    key: 'updateAt',
    label: 'Update At',
  },
  {
    key: 'deleteAt',
    label: 'Delete At',
  },
  {
    key: 'actions',
    label: '',
  },
];

const statusOrder = [
  { key: 'จัดส่งสำเร็จ', uid: 'จัดส่งสำเร็จ' },
  { key: 'กำลังจัดส่ง', uid: 'กำลังจัดส่ง' },
  { key: 'กำลังเตรียมพัสดุ', uid: 'กำลังเตรียมพัสดุ' },
];

// export const Orders: OrderInfo[] = [
//   {
//     id: 1,
//     orderId: 'OD123456789',
//     addressInfo: {
//       name: 'คุณแดง',
//       street: '12/345',
//       district: 'หนองสุข',
//       city: 'เมือง',
//       province: 'บุรีรัมย์',
//       postcode: 'ๅ/-ภถ',
//       phone: '0987654321',
//     },
//     orderItem: [
//       {
//         nameBook: 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ1',
//         price: 150,
//         qty: 1,
//         total: 150,
//       },
//       {
//         nameBook: 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ2',
//         price: 150,
//         qty: 1,
//         total: 150,
//       },
//     ],
//     quantity: 2,
//     amount: 300,
//     status: 'กำลังเตรียมพัสดุ',
//     createAt: '10/01/24',
//     updateAt: '10/01/24',
//     deleteAt: '-',
//   },
//   {
//     id: 2,
//     orderId: 'OD0000000',
//     addressInfo: {
//       name: 'คุณนิ่ม',
//       street: '12/345',
//       district: 'หนองสุข',
//       city: 'เมือง',
//       province: 'บุรีรัมย์',
//       postcode: 'ๅ/-ภถ',
//       phone: '0987654321',
//     },

//     orderItem: {
//       products: [{
//         bookName: 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ4',
//         price: 250,
//       },
//       {
//         bookName: 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ2',
//         price: 150,
//       },],

//       qty: 2,
//       total: 300,
//     },
//     quantity: 2,
//     amount: 400,
//     status: 'กำลังเตรียมพัสดุ',
//     createAt: '10/01/24',
//     updateAt: '10/01/24',
//     deleteAt: '-',
//   },
//   // {
//   //   id: 2,
//   //   orderId: 'OD123456789',
//   //   receiver: 'Mr. Dang',
//   //   orderItem: ['ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ1', 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ2'],
//   //   quantity: 2,
//   //   status: 'กำลังเตรียมพัสดุ',
//   //   createAt: '10/01/24',
//   //   updateAt: '10/01/24',
//   //   deleteAt: '-',
//   // },
//   // {
//   //   id: 3,
//   //   orderId: 'OD123456789',
//   //   receiver: 'Mr. Dang',
//   //   orderItem: ['ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ1', 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ2'],
//   //   quantity: 2,
//   //   status: 'กำลังเตรียมพัสดุ',
//   //   createAt: '10/01/24',
//   //   updateAt: '10/01/24',
//   //   deleteAt: '-',
//   // },
// ];
export { columnOrderInfo, statusOrder };
