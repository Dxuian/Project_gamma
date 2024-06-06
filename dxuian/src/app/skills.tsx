import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiFastify } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiRender } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaChrome } from "react-icons/fa";
import { SiBabel } from "react-icons/si";
import { SiC } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiShadcnui } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import Link from 'next/link';

export function  LitIcon ({className}: {className: string}){
    return (
    <div className={className}>
<svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="red" d="M40 120l20-60l90 90l-30 50l-40-40h-20"></path>
    <path fill="#283198" d="M80 160 L80 80 L120 40 L 120 120 M0 160 L40 200 L40 120 L20 120"></path>
    <path fill="#324fff" d="M40 120v-80l40-40v80M120 200v-80l40-40v80M0 160v-80l40 40"></path>
    <path fill="#0ff" d="M40 200v-80l40 40"></path>
</svg>

      </div>
      )
}


export function Skills() {
    return (
<section className="py-10">
    <div className="container mx-auto">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] font-extrabold py-3 text-center">
                Technologies and languages I have worked with
            </h1>
            <div className="text-5xl opacity-75 flex gap-8 flex-wrap w-full sm:justify-center justify-center">

        <Link className="text-yellow-500" href="/your-path"><IoLogoJavascript /></Link>
<Link className="text-blue-600" href="/www.google.com"><FaHtml5 /></Link>
<Link className="text-blue-400" href="/your-path"><FaCss3Alt /></Link>

<Link className="text-blue-700" href="/your-path"><SiCplusplus /></Link>
<Link className="text-yellow-300" href="/your-path"><FaPython /></Link>
<Link className="text-blue-800" href="/your-path"><SiTypescript /></Link>
<Link className="text-blue-700" href="/your-path"><SiC /></Link>
<Link className="text-blue-500" href="/your-path"><FaReact /></Link>

<Link className="text-green-500" href="/your-path"><SiNumpy /></Link>
<Link className="text-red-500" href="/your-path"><SiPandas /></Link>
<Link className="text-purple-500" href="/your-path"><SiScikitlearn /></Link>
<Link className="text-orange-500" href="/your-path"><SiTensorflow /></Link>

<Link className="text-blue-500" href="/your-path"><VscVscode /></Link>
<Link className="text-white-500" href="/your-path"><FaGitAlt /></Link>
<Link className="text-black" href="/your-path"><FaGithub /></Link>

<Link className="text-green-600" href="/your-path"><DiNodejs /></Link>
<Link className="text-blue-300" href="/your-path"><SiFastify /></Link>
<Link className="text-green-700" href="/your-path"><DiDjango /></Link>
<Link className="text-black" href="/your-path"><RiNextjsFill /></Link>



<Link className="text-blue-600" href="/your-path"><FaChrome /></Link>

<Link className="text-green-500" href="/your-path"><LitIcon className="text-sm !h-12"/></Link>
<Link className="text-purple-500" href="/your-path"><FaBootstrap /></Link>
<Link className="text-blue-500" href="/your-path"><RiTailwindCssFill /></Link>



            </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h1 className="mt-8 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] font-extrabold py-3 text-center">
                Tools
            </h1>
            <div className="text-5xl opacity-75 flex gap-8 flex-wrap w-full sm:justify-center justify-center">

<Link className="text-yellow-500" href="/your-path"><SiBabel /></Link>
<Link className="text-orange-500" href="/your-path"><FaUbuntu /></Link>

<Link className="text-blue-800" href="/your-path"><FaWindows /></Link>

<Link className="text-pink-500" href="/your-path"><FaSass /></Link>
            <Link className="text-green-500" href="/your-path"><RiSupabaseFill /></Link>
<Link className="text-red-600" href="/your-path"><SiRender /></Link>
<Link className="text-blue-700" href="/your-path"><SiMicrosoftazure /></Link>
<Link className="text-red-500" href="/your-path"><SiJupyter /></Link>
<Link className="text-black" href="/your-path"><FcLinux /></Link>
<Link className=" p-1 border rounded border-1 bg-black text-white" href="/your-path"><SiShadcnui /></Link>
<Link className="text-yellow-300" href="/your-path"><SiWebpack /></Link>


<Link className="text-blue-500" href="/your-path"><FaDocker /></Link>
<Link className="text-blue-600" href="/your-path"><SiSqlite /></Link>
<Link className="text-orange-500" href="/your-path"><SiMysql /></Link>
<Link className="text-blue-600" href="/your-path"><BiLogoPostgresql /></Link>
            </div>
        </div>
    </div>
</section>

    )
}