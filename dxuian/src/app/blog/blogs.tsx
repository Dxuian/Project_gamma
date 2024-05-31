'use client'

import { Suspense, useEffect, useState } from 'react';
import BlogsData from './blogserver';

export default function Blogs() {
  let [state ,setstate] = useState(10)


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
  //     if (isBottom) {
  //       setstate(state + 10); // Load 10 more blogs when bottom is reached
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll); // Clean up event listener on unmount
  // }, [state]);


  return (
    <>
      <Suspense fallback={<div className='!text-2xl'>Loading...</div>}>
        <BlogsData count={state} />
      </Suspense>
    </>
  );
}