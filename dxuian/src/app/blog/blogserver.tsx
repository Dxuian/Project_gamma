'use server'
import { getblogs } from './server';
export default async function BlogsData({count}: {count:number}) {
  //return  count-10 blogs
  // let [state , setstate] = useState()
  let x=  await getblogs(count);
  return x;
  // return (
  //   <div id="bloglist">
  //     <span className="!text-5xl">
  //       {blogs.map((blog, index) => (
  //         <div key={index}>
  //           <h2>{blog}</h2>
  //         </div>
  //       ))}
  //     </span>
  //   </div>
  // );
}