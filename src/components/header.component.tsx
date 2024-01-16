import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Inter } from 'next/font/google';
import React from 'react';
import Image from 'next/image';
import { SearchIcon } from '@/icon/SearchIcon';

type Props = {};
const inter = Inter({ subsets: ['latin'] });

const HeaderView: React.FC = () => {
  return (
    <div className="col-span-6 ...">
      <Navbar className='h-16' maxWidth="full" >
        <NavbarBrand className="flex m-5">
          <Image
            className="p-2 mr-4"
            src={'https://storage.googleapis.com/itapp-publish/Logo/learncorp-logo-mobile.png'}
            alt={'Learn Cop.'}
            width={120}
            height={80}
            priority
          />
          <NavbarContent className="flex sm:flex gap-4" justify="center">
            <NavbarItem>
              <Button isIconOnly color="secondary" className="hover:bg-sky-100 m-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent>
            {/* <NavbarItem>
              <Input
                className="m-5"
                size="md"
                labelPlacement="outside"
                placeholder="Search"
                color="primary"
                endContent={<SearchIcon />}
              />
            </NavbarItem> */}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default HeaderView;
