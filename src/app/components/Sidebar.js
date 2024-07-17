"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBox, faList, faClipboard, faCog ,faShippingFast,faPerson,faSignOut} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`flex flex-col w-80 bg-white h-screen`}>
        <nav className="flex flex-col p-4 space-y-4 text-black">
          <Link href="/dashboard" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-black text-xl rounded-md bg-slate-100">
              <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2 text-green-600" />
              <span className="hidden sm:block">Dashboard</span>
            </a>
          </Link>
          <Link href="/products" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl  rounded-md ">
              <FontAwesomeIcon icon={faBox} className="w-5 h-5 mr-2 text-blue-600" />
              <span className="hidden sm:block">Products</span>
            </a>
          </Link>
          <Link href="/categories" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl  rounded-md ">
              <FontAwesomeIcon icon={faList} className="w-5 h-5 mr-2 text-red-600" />
              <span className="hidden sm:block">Categories</span>
            </a>
          </Link>
          <Link href="/categories" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl  rounded-md ">
              <FontAwesomeIcon icon={faPerson} className="w-5 h-5 mr-2 text-red-600" />
              <span className="hidden sm:block">Admin</span>
            </a>
          </Link>
          <Link href="/orders" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md ">
              <FontAwesomeIcon icon={faClipboard} className="w-5 h-5 mr-2  text-yellow-600" />
              <span className="hidden sm:block">Orders</span>
            </a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md ">
              <FontAwesomeIcon icon={faShippingFast} className="w-5 h-5 mr-2  text-green-600" />
              <span className="hidden sm:block">Shiping</span>
            </a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md ">
              <FontAwesomeIcon icon={faCog} className="w-5 h-5 mr-2  text-green-600" />
              <span className="hidden sm:block">Settings</span>
            </a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="flex items-center p-3 gap-3 text-xl rounded-md ">
              <FontAwesomeIcon icon={faSignOut} className="w-5 h-5 mr-2  text-red-600" />
              <span className="hidden sm:block">Log Out</span>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
