import React from "react";
import { IoLogoTwitter } from "react-icons/io";

const BlogFooter: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/blog"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Blog
            </a>
          </div>
        </nav>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://twitter.com/phasfernandes"
            className="text-gray-400 hover:text-gray-500"
          >
            <IoLogoTwitter className="text-blue-500" size={24} />
          </a>
        </div>
        <p className="mt-4 text-center text-base text-gray-400">
          &copy; 2020 Pedro Fernandes · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default BlogFooter;
