"use server"
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

export async function LitIcon({ className }: { className: string }) {
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
import Reveal from '@/app/reveal';

import styles from "@/app/ui/addblog.module.css"
export async function Skills() {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] font-extrabold py-3 text-center">
                        Technologies and languages I have worked with
                    </h1>
                    <div className="text-5xl opacity-75 flex gap-8 flex-wrap w-full sm:justify-center justify-center">
                        <span><Reveal><Link className="text-yellow-500" href="https://www.javascript.com/"><div className={styles.scaleonhover}><IoLogoJavascript /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-600" href="https://developer.mozilla.org/en-US/docs/Web/HTML"><div className={styles.scaleonhover}><FaHtml5 /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-400" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><div className={styles.scaleonhover}><FaCss3Alt /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-700" href="https://isocpp.org/"><div className={styles.scaleonhover}><SiCplusplus /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-yellow-300" href="https://www.python.org/"><div className={styles.scaleonhover}><FaPython /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-800" href="https://www.typescriptlang.org/"><div className={styles.scaleonhover}><SiTypescript /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-700" href="https://en.wikipedia.org/wiki/C_(programming_language)"><div className={styles.scaleonhover}><SiC /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-500" href="https://reactjs.org/"><div className={styles.scaleonhover}><FaReact /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-green-500" href="https://numpy.org/"><div className={styles.scaleonhover}><SiNumpy /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-red-500" href="https://pandas.pydata.org/"><div className={styles.scaleonhover}><SiPandas /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-purple-500" href="https://scikit-learn.org/"><div className={styles.scaleonhover}><SiScikitlearn /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-orange-500" href="https://www.tensorflow.org/"><div className={styles.scaleonhover}><SiTensorflow /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-500" href="https://code.visualstudio.com/"><div className={styles.scaleonhover}><VscVscode /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-white-500" href="https://git-scm.com/"><div className={styles.scaleonhover}><FaGitAlt /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-white" href="https://github.com/"><div className={styles.scaleonhover}><FaGithub /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-green-600" href="https://nodejs.org/"><div className={styles.scaleonhover}><DiNodejs /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-300" href="https://www.fastify.io/"><div className={styles.scaleonhover}><SiFastify /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-green-700" href="https://www.djangoproject.com/"><div className={styles.scaleonhover}><DiDjango /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-white" href="https://nextjs.org/"><div className={styles.scaleonhover}><RiNextjsFill /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-600" href="https://www.google.com/chrome/"><div className={styles.scaleonhover}><FaChrome /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-green-500" href="https://lit.dev/"><div className={styles.scaleonhover}><LitIcon className="text-sm !h-12" /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-purple-500" href="https://getbootstrap.com/"><div className={styles.scaleonhover}><FaBootstrap /></div></Link></Reveal></span>
                        <span><Reveal><Link className="text-blue-500" href="https://tailwindcss.com/"><div className={styles.scaleonhover}><RiTailwindCssFill /></div></Link></Reveal></span>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <h1 className="mt-8 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] font-extrabold py-3 text-center">
                        Tools i've used 
                    </h1>
                    <div className="text-5xl opacity-75 flex gap-8 flex-wrap w-full sm:justify-center justify-center">

                        <span><Reveal><Link className="text-yellow-500" href="https://babeljs.io/"><div className={styles.scaleonhover}><SiBabel /></div></Link></Reveal></span>
                        <span>
                            <Reveal>
                                <Link className="text-orange-500" href="https://ubuntu.com/">
                                    <div className={styles.scaleonhover}>
                                        <FaUbuntu />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-blue-800" href="https://www.microsoft.com/en-us/windows">
                                    <div className={styles.scaleonhover}>
                                        <FaWindows />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-pink-500" href="https://sass-lang.com/">
                                    <div className={styles.scaleonhover}>
                                        <FaSass />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-green-500" href="https://supabase.io/">
                                    <div className={styles.scaleonhover}>
                                        <RiSupabaseFill />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-red-600" href="https://render.com/">
                                    <div className={styles.scaleonhover}>
                                        <SiRender />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-blue-700" href="https://azure.microsoft.com/en-in/products/app-service/containers?activetab=pivot:deploytab">
                                    <div className={styles.scaleonhover}>
                                        <SiMicrosoftazure />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-red-500" href="https://jupyter.org/">
                                    <div className={styles.scaleonhover}>
                                        <SiJupyter />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-black" href="https://www.kernel.org/">
                                    <div className={styles.scaleonhover}>
                                        <FcLinux />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="outline outline-2 outline-white bg-black text-white" href="https://ui.shadcn.com/">
                                    <div className={`${styles.scaleonhover} custom-class`}>
                                        <SiShadcnui size={30} /> {/* Adjust the size prop */}
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-yellow-300" href="https://webpack.js.org/">
                                    <div className={styles.scaleonhover}>
                                        <SiWebpack size={50} />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-blue-500" href="https://www.docker.com/">
                                    <div className={styles.scaleonhover}>
                                        <FaDocker size={50} />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-blue-600" href="https://www.sqlite.org/">
                                    <div className={styles.scaleonhover}>
                                        <SiSqlite />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-orange-500" href="https://www.mysql.com/">
                                    <div className={styles.scaleonhover}>
                                        <SiMysql />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                        <span>
                            <Reveal>
                                <Link className="text-blue-600" href="https://www.postgresql.org/">
                                    <div className={styles.scaleonhover}>
                                        <BiLogoPostgresql />
                                    </div>
                                </Link>
                            </Reveal>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}