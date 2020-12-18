import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileHeader from "./MobileHeader";

const BlogHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative bg-white border-b border-cool-gray-300 shadow-md">
      <div className="flex md:w-11/12 md:m-auto justify-beclassNameeen items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-between items-center w-full">
          <div className="w-48">
            <a href="/" className="flex items-center">
              <img className="" src="/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out outline-none text-lg"
            >
              <FiMenu size={24} className="mr-3" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <a
            href="/"
            className="whitespace-nowrap font-mont text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Home
          </a>
          <a
            href="/blog"
            className="whitespace-nowrap font-mont text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Blog
          </a>
        </div>

        {isOpen ? <MobileHeader setIsOpen={setIsOpen} /> : null}
      </div>
    </div>
  );
};

export default BlogHeader;
