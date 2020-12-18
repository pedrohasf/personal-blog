import React from "react";
import { FiBookmark, FiHome, FiX } from "react-icons/fi";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileHeader: React.FC<Props> = ({ setIsOpen }: Props) => {
  return (
    <div>
      <div className="absolute top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <FiX size={27} />
                  </button>
                </div>
              </div>
              <div>
                <nav className="grid grid-cols-1 gap-5">
                  <a
                    href="/"
                    className="border-t -m-3 p-3 flex items-center space-x-4 hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900"
                  >
                    <FiHome className="mr-2 text-blue-500" size={20} />
                    Home
                  </a>
                  <a
                    href="/blog"
                    className="border-t -m-3 p-3 flex items-center space-x-4 hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900"
                  >
                    <FiBookmark className="mr-2 text-blue-500" size={20} />
                    Blog
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
