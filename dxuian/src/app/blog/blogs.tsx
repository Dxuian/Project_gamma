"use client"
import { Suspense, useEffect, useState } from 'react';
import BlogsData from './blogserver';

const BlogsList = ({ blogs }: { blogs: string[] }) => (
  <>
    {blogs.map((blog, index) => (
      <div key={index}>
        <h2>{blog}</h2>
      </div>
    ))}
  </>
);

export default function Blogs() {
  let [state, setstate] = useState(10);
  let [blogs, setblogs] = useState<string[]>([]); // Specify the type of the blogs state variable

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (isBottom) {
        setstate(state + 10); // Load 10 more blogs when bottom is reached
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up event listener on unmount
  }, [state]);

  useEffect(() => {
    // Fetch new blogs and append them to the existing list
    const fetchBlogs = async () => {
      const newBlogs = await BlogsData({ count: state });
      setblogs(prevBlogs => [...prevBlogs, ...newBlogs]);
    };
    fetchBlogs();
  }, [state]);

  return blogs.length === 0 ? (
    <div className='!text-2xl'>Loading...</div>
  ) : (
    <Suspense fallback={<div className='!text-2xl'>Loading...</div>}>
      <BlogsList blogs={blogs} />
    </Suspense>
  );
}