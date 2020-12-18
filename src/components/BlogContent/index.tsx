import React from 'react'

interface IProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  image: string
}

const BlogContent: React.FC<IProps> = ({
  children,
  title,
  subtitle,
  image
}) => {
  return (
    <div className="relative py-8 border-b border-gray-300 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <img className="w-full rounded-lg mt-8" src={image} alt={title} />
          <p className="mt-8 text-xl text-gray-500 leading-8">{subtitle}</p>
        </div>
        <div className="mt-6 prose prose-lg text-gray-500 mx-auto">{children}</div>
      </div>
    </div>
  )
}

export default BlogContent
