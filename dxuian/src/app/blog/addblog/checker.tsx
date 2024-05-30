"use server"


import fs from 'fs/promises';
import { redirect } from 'next/navigation';
import path from 'path';

export default async function test(prevstate:any,e: FormData) {
  const content = e.get('content'); // get the value of the textarea with the name "content"
  const filesss : any  = e.get('file');
    console.log("ASdasd") ;
  if (filesss) {
    // Get the file details
    const filename = filesss["name"];
    const fileBuffer = Buffer.from(await filesss.arrayBuffer());

    
    // Define the path where the file will be saved
    const savePath = path.join(process.cwd(), 'uploads', filename);

    try {
      // Ensure the uploads directory exists
      await fs.mkdir(path.dirname(savePath), { recursive: true });

      // Save the file to the disk
      await fs.writeFile(savePath, fileBuffer);

      console.log(`File saved successfully to ${savePath}`);
    } 
    catch (error) {
      console.error('Error saving the file:', error);
      return {
        message:'Error saving the file:'
      }
    }
  } else {
    console.log('No file found in the Form Data');
    return {message:'No file found in the Form Data'};
  }
  redirect("/blog")
  return {message:'Success'};
  // console.log(e.keys()); // Log the keys of the FormData
}

