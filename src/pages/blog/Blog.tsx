// Import necessary React libraries and components
import axiosClient from "@/axiosClient";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoDataFound from "@/assets/nodata.svg";

// Define the type for a blog post
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  body: string;
  image: string;
}

// Dummy data for blog posts
// const dummyBlogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Introduction to React.js",
//     author: "John Doe",
//     date: "2023-01-01",
//     category: "Business",
//     excerpt:
//       "Learn the basics of React.js and how to build interactive user interfaces.",
//   },
//   {
//     id: 2,
//     title: "Introduction to React.js",
//     author: "John Doe",
//     date: "2023-01-01",
//     category: "Business",
//     excerpt:
//       "Learn the basics of React.js and how to build interactive user interfaces.",
//   },
//   {
//     id: 3,
//     title: "Introduction to React.js",
//     author: "John Doe",
//     date: "2023-01-01",
//     category: "Business",
//     excerpt:
//       "Learn the basics of React.js and how to build interactive user interfaces.",
//   },
//   {
//     id: 4,
//     title: "Introduction to React.js",
//     author: "John Doe",
//     date: "2023-01-01",
//     category: "Business",
//     excerpt:
//       "Learn the basics of React.js and how to build interactive user interfaces.",
//   },
//   {
//     id: 5,
//     title: "Introduction to React.js",
//     author: "John Doe",
//     date: "2023-01-01",
//     category: "Business",
//     excerpt:
//       "Learn the basics of React.js and how to build interactive user interfaces.",
//   },
// ];

const Blog: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [latestBlogPosts, setLatestBlogPosts] = useState<BlogPost>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/getblogs");
        setLatestBlogPosts(response.data[0]);
        setBlogPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="items-center justify-center md:flex">
      <div className="mt-[4.5rem] min-h-[100vh] w-full pb-8">
        <div className="mx-auto w-5/6">
          <div className="flex gap-8 py-12">
            {blogPosts.length <= 0 && (
              <div className="flex h-[80vh] w-full justify-center">
                <img className="w-[402px]" src={NoDataFound} />
              </div>
            )}
            {isAboveMediumScreens && latestBlogPosts && (
              <div className="min-w-[60vw] px-32">
                <div key={latestBlogPosts?.id} className="blog-post-card">
                  {/* Featured image */}
                  {/* For simplicity, using a placeholder image */}
                  <img
                    className="h-[400px]"
                    src={latestBlogPosts?.image}
                    alt="Featured"
                  />

                  {/* Blog post information */}
                  <div className="blog-post-info">
                    <span className="my-4 font-bold text-blue-500">
                      {latestBlogPosts?.category}
                    </span>
                    <h2 className="text-[32px] font-bold text-black">
                      {latestBlogPosts?.title}
                    </h2>
                    <div
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: latestBlogPosts?.body ?? "",
                      }}
                    />

                    {/* Read more link */}
                    <Link
                      className="rounded-full border px-4 py-2 text-red-600"
                      to={`/blog/${latestBlogPosts?.id}`}
                    >
                      Read More
                    </Link>
                    <p className="text-md flex justify-end italic text-gray-400">
                      {latestBlogPosts?.author} - {latestBlogPosts?.date}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {blogPosts && (
              <div className="grid-row-4 grid gap-6">
                {/* Map through the blog posts and render each one */}
                {blogPosts.slice(1).map((post) => (
                  <div key={post.id} className="blog-post-card">
                    {/* Featured image */}
                    {/* For simplicity, using a placeholder image */}
                    <img
                      className="h-[250px]"
                      src={post.image}
                      alt="Featured"
                    />

                    {/* Blog post information */}
                    <div className="blog-post-info">
                      <span className="font-bold text-blue-500">
                        {post.category}
                      </span>
                      <h2 className="text-[32px] font-bold text-black">
                        {post.title}
                      </h2>
                      <div
                        className="mb-4"
                        dangerouslySetInnerHTML={{
                          __html: post?.body ?? "",
                        }}
                      />

                      {/* Read more link */}
                      <Link
                        className="rounded-full border px-4 py-2 text-red-600"
                        to={`/blog/${post?.id}`}
                      >
                        Read More
                      </Link>
                      <p className="text-md flex justify-end italic text-gray-400">
                        {post.author} - {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
