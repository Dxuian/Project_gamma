"use server"

// export default async function test(e: any) {
// //   e.preventDefault(); // prevent the default form submission
//   const formData = new FormData(e.target); // create a new FormData object from the form
// //   debugger ; 
//   const content = e.get('content'); // get the value of the textarea with the name "content"
// //   for (const value of formData.values()) {
// //     console.log(value);
// //   }
//   const file  = e.get('file') ;

//   //save the file 
//     console.log(file) ;
//     console.log(content) ;



//   console.log(content); // log the value

//   // print all fields in object e 
// //   for (var key in e) {
// //     console.log(key);
// //   }
//   console.log(e["keys"]);
// }

// "use server"

import fs from 'fs/promises';
import path from 'path';

export default async function test(e: FormData) {
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
    } catch (error) {
      console.error('Error saving the file:', error);
    }
  } else {
    console.log('No file found in the FormData');
  }

  console.log(e.keys()); // Log the keys of the FormData
}
