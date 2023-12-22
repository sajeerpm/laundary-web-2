// Import necessary React libraries and components
import axiosClient from "@/axiosClient";
// import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

const BlogView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [blogPost, setBlogPost] = useState<BlogPost>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/getblog/" + id);
        setBlogPost(response.data);
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
        <div className="mx-auto w-1/2">
          {blogPost && (
            <div className="flex flex-col gap-8 py-12">
              <div className="grid-row-4 grid flex-1 gap-8">
                <div key={blogPost?.id} className="blog-post-card">
                  <img
                    className="h-[400px] w-auto"
                    src={blogPost?.image}
                    alt="Featured"
                  />

                  {/* Blog post information */}
                  <div className="blog-post-info">
                    <span className="my-4 font-bold text-blue-500">
                      {blogPost?.category}
                    </span>
                    <h2 className="text-[32px] font-bold text-black">
                      {blogPost?.title}
                    </h2>
                    <div
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: blogPost?.body ?? "",
                      }}
                    />

                    {/* Read more link */}
                    <p className="text-md flex justify-end italic text-gray-400">
                      {blogPost?.author} - {blogPost?.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogView;
