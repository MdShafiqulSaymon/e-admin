"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBox, faList, faClipboard, faCog, faShippingFast, faPerson, faSignOut } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 z-20 flex items-center p-3 md:hidden`} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-black" />
      </div>
      <div className={`fixed top-0 left-0 z-10 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-80 md:flex`}>
        <nav className="flex flex-col p-4 space-y-4 text-black w-80">
          <Link href="/" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-black text-xl rounded-md bg-slate-100">
              <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2 text-green-600" />
              <span className="md:block">Dashboard</span>
            </a>
          </Link>
          <Link href="/products" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md">
              <FontAwesomeIcon icon={faBox} className="w-5 h-5 mr-2 text-blue-600" />
              <span className=" md:block">Products</span>
            </a>
          </Link>
          <Link href="/categories" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md">
              <FontAwesomeIcon icon={faList} className="w-5 h-5 mr-2 text-red-600" />
              <span className=" md:block">Categories</span>
            </a>
          </Link>
          <Link href="/admin" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md">
              <FontAwesomeIcon icon={faPerson} className="w-5 h-5 mr-2 text-red-600" />
              <span className=" md:block">Admin</span>
            </a>
          </Link>
          <Link href="/orders" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md">
              <FontAwesomeIcon icon={faClipboard} className="w-5 h-5 mr-2 text-yellow-600" />
              <span className=" md:block">Orders</span>
            </a>
          </Link>
          <Link href="/shipping" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md">
              <FontAwesomeIcon icon={faShippingFast} className="w-5 h-5 mr-2 text-green-600" />
              <span className=" md:block">Shipping</span>
            </a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md">
              <FontAwesomeIcon icon={faCog} className="w-5 h-5 mr-2 text-green-600" />
              <span className=" md:block">Settings</span>
            </a>
          </Link>
          <Link href="/logout" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md">
              <FontAwesomeIcon icon={faSignOut} className="w-5 h-5 mr-2 text-red-600" />
              <span className=" md:block">Log Out</span>
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
