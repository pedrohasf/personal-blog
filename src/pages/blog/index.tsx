import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllPosts } from "lib/api";
import Link from "next/link";
import { FiClock, FiUser } from "react-icons/fi";
import { format, parseISO } from "date-fns";
import { IPost } from "./[slug]";
import Newsletter from "components/Newsletter";

interface IProps {
  posts: IPost[];
}

const Blog: React.FC<IProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="bg-white py-6 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
            BLOG POSTS
          </h1>
          <div className="mt-2 pt-8 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map(({ slug, title, date, excerpt }) => (
              <div key={slug}>
                <Link href={`/blog/${slug}`} passHref>
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {title}
                    </p>
                    <div className="flex justify-between mt-3">
                      <p className="flex items-center">
                        <FiUser className="mr-2" /> Pedro Fernandes
                      </p>
                      <time className="flex items-center" dateTime={date}>
                        <FiClock className="mr-2" />
                        {format(parseISO(date), "LLLL	d, yyyy")}
                      </time>
                    </div>
                    <p className="mt-2 text-base text-gray-500">{excerpt}</p>
                  </a>
                </Link>
                <div className="mt-3">
                  <Link href={`/blog/${slug}`} passHref>
                    <a className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                      Read full story
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Newsletter />
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "title", "date", "excerpt"]);

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
