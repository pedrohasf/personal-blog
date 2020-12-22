import BlogContent from "components/BlogContent";
import BlogFooter from "components/Footer";
import BlogHeader from "components/Header";
import { getAllPosts, getPostBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export interface IPost {
  slug: string;
  title: string;
  description: string;
  subtitle: string;
  excerpt: string;
  date: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  content: string;
}

interface IProps {
  post: IPost;
}

const BlogPost: React.FC<IProps> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <NextSeo
        openGraph={{
          title: post.title,
          description: post.description,
          images: [
            {
              url: post.ogImage.url,
              alt: post.title,
            },
          ],
        }}
        title={post.title}
        description={post.description}
      />
      <BlogHeader />
      <BlogContent
        title={post.title}
        date={post.date}
        subtitle={post.subtitle}
        image={post.coverImage}
        content={post.content}
      />
      <BlogFooter />
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const post = getPostBySlug(String(params?.slug), [
    "title",
    "description",
    "subtitle",
    "coverImage",
    "date",
    "slug",
    "content",
    "ogImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPost;
