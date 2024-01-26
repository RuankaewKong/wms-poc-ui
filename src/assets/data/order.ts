const columnOrder = [
  {
    key: 'id',
    label: 'NO.',
  },

  {
    key: 'orderId',
    label: 'Order ID.',
  },
  {
    key: 'receiver',
    label: 'Receiver',
  },
  {
    key: 'quantity',
    label: 'Quantity',
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
  { key: 'Active', uid: 'จัดส่งสำเร็จ' },
  { key: 'Paused', uid: 'กำลังจัดส่ง' },
  { key: 'Vacation', uid: 'กำลังเตรียมพัสดุ' },
];

export const Orders = [
  {
    id: 1,
    orderId: 'OD123456789',
    addressInfo: [
      {
        name: 'คุณแดง',
        street: '12/345',
        district: 'หนองสุข',
        city: 'เมือง',
        province: 'บุรีรัมย์',
        postcode: 'ๅ/-ภถ',
        phone: '0987654321',
      },
    ],
    orderItem: [
      {
        nameBook: 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ1',
        price: 150,
        qty: 1,
        total: 150,
      },
      {
        nameBook: 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ2',
        price: 150,
        qty: 1,
        total: 150,
      },
    ],
    quantity: 2,
    amount: 300,
    status: 'กำลังเตรียมพัสดุ',
    createAt: '10/01/24',
    updateAt: '10/01/24',
    deleteAt: '-',
  },
  // {
  //   id: 2,
  //   orderId: 'OD123456789',
  //   receiver: 'Mr. Dang',
  //   orderItem: ['ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ1', 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ2'],
  //   quantity: 2,
  //   status: 'กำลังเตรียมพัสดุ',
  //   createAt: '10/01/24',
  //   updateAt: '10/01/24',
  //   deleteAt: '-',
  // },
  // {
  //   id: 3,
  //   orderId: 'OD123456789',
  //   receiver: 'Mr. Dang',
  //   orderItem: ['ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ1', 'ฟิสิกส์เพื่อสอบเข้าเตรียมอุดมฯ2'],
  //   quantity: 2,
  //   status: 'กำลังเตรียมพัสดุ',
  //   createAt: '10/01/24',
  //   updateAt: '10/01/24',
  //   deleteAt: '-',
  // },
];
export { columnOrder, statusOrder };
