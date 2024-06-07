"use client"
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
const delay = (ms: any) => new Promise(res => setTimeout(res, ms));


const SuspenseImage = ({ src, alt, h, w }: { src: any; alt: any, h?: any; w?: any }) => {
 
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.src = src;
      img.onload = async () => {
        // await delay(5000);
        setImgSrc(src);
        setIsLoading(false);
      };
      img.onerror = (e) => {
        setError((e as any).toString());
        setIsLoading(false);
      };
    };
    loadImage();
  }, [src]);
  if (src == "skeletonimg.jpg") {
    return <Skeleton className='h-96 w-full' />;
  }
  if (isLoading) {
    let height = Math.min(h, (window.innerHeight * 0.3) || 720);
    let style = {
      height: `${height}px`,
      width: '100%',
    };
    return <Skeleton style={style} />;
  }
  if (error) {
    let height = h;
    let style = {
      height: `${height}px`,
      width: '100%',
    };
    console.log(("An error occurred while loading the image"));
    return <Skeleton style={style} />;
  }
  //  console.log(`finally` +`${w}px` + `${h}px`) ;
  return <img   /*={`${h}%`}*/ src={imgSrc || undefined} title={alt} alt={alt} />;
};

export default SuspenseImage;