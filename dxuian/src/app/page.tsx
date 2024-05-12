// import Image from "next/image";
import App from "./ui/App"
// import Head from "next/head";
import { ModeToggle } from "./ui/darkmode"

function Head(){
  return(
    <></>
  )
}
// function Darkmodetoggle(){
//   return <ModeToggle/>
// }
export default function Body(){
  return(
    <>
      {/* <Head/> */}
      <ModeToggle ></ModeToggle>
        <App/>
      {/* < Darkmodetoggle> */}
    </>

  )
}





