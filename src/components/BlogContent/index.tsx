import React from "react";
import { parseISO, format } from "date-fns";
import { FiClock, FiUser } from "react-icons/fi";

interface IProps {
  title: string;
  subtitle?: string;
  image: string;
  content: string;
  date: string;
}

const BlogContent: React.FC<IProps> = ({
  title,
  subtitle,
  image,
  content,
  date,
}) => {
  const parsedDate = parseISO(date);
  return (
    <div className="relative py-8 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto prose">
          <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <div className="flex justify-between">
            <p className="flex items-center">
              <FiUser className="mr-2" /> Pedro Fernandes
            </p>
            <time className="flex items-center" dateTime={date}>
              <FiClock className="mr-2" />
              {format(parsedDate, "LLLL	d, yyyy")}
            </time>
          </div>
          <img className="w-full rounded-lg mt-8" src={image} alt={title} />
          <p className="mt-8 text-xl text-gray-500 leading-8">{subtitle}</p>
        </div>
        <div className="mt-6 prose prose-lg prose-indigo text-gray-500 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
