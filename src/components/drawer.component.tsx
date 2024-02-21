import Order from '@/app/wms/order/page';
import { CartIcon } from '@/icon/CartIcon';
import { ProductIcon } from '@/icon/ProductIcon';
import { Button, Link, Listbox, ListboxItem, ListboxSection } from '@nextui-org/react';

import React from 'react';

interface Props {
  onClick?: () => void;
}

const DrawerConmponent: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="col-span-1 ... ">
      <div className=" w-auto h-full max-h-screen">
        <div className="font-sans text-slate-400 m-3">Menu</div>
        <ul className="">
          <li className="flex mx-5 mt-3">
            <Link href="/wms/order">
              <Button
                color="secondary"
                className="flex justify-start hover:bg-sky-100 w-full text-base font-medium"
                startContent={<CartIcon />}
              >
                Delivery
              </Button>
            </Link>
          </li>
          <li className="mx-5 mt-3 ">
            <Link href="/wms/product">
              <Button
                color="secondary"
                className="flex justify-start hover:bg-sky-100 w-full text-base font-medium"
                startContent={<ProductIcon />}
              >
                Products
              </Button>
            </Link>
          </li>
          <li className="mx-5 mt-3 ">
            <Link href="/wms/dashboard">
              <Button
                color="secondary"
                className="flex justify-start hover:bg-sky-100 w-full text-base font-medium"
                startContent={<ProductIcon />}
              >
                Dashboard
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerConmponent;
