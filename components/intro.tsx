'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Typewriter } from 'react-simple-typewriter';
import { BsWhatsapp } from 'react-icons/bs';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section 
            ref={ref} id='home' 
            className=' mb-28 max-w-[50rem] text-center 
            sm:mb-0 scroll-mt-[100rem]'
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{
                            type: "tween",
                            duration: 2,
                        }}
                    >
                        <Image 
                            src="/photo.png" alt="Syed"
                            width="180"
                            height="180"
                            quality="100"
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover 
                            border-[0.20rem] 
                            border-blue shadow-xl'
                        />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-2xl'
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1 
                className='mb-10 mt-4 px-4 text-2xl font-bold sm:text-5xl lg:text-xl  font-medium  !leading-[1.5]'
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0}}
            >
                <Typewriter
                    words={[
                        "Hello, I'm Syed, a Full Stack Engineer with expertise in both front-end and back-end technologies."
                        ," I specialize in creating dynamic and user-friendly websites and applications."
                    ]}
                    loop={false}
                    cursor
                    cursorStyle='-'
                    typeSpeed={20}
                    deleteSpeed={70}
                    delaySpeed={1000}
                />
            </motion.h1>
            <motion.div 
                className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
            >
                <a
                    className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-200 transition cursor-pointer dark:bg-white/10' 
                    href='/Syed_Resume.pdf' 
                    download
                >
                    Download CV 
                    <HiDownload 
                        className='opacity-70 group-hover:translate-1 transition' 
                    />
                </a>
                <a 
                    className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60' 
                    href='https://www.linkedin.com/in/itsdevsyed/' target='_blank'
                >
                    <BsLinkedin />
                </a>
                <a 
                    className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60' 
                    href='https://github.com/itsdevsyed' 
                    target='_blank'
                >
                    <BsGithub />
                </a> 
                <a 
                    className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60' 
                    href='https://wa.me/[+91 9823366765]' 
                    target='_blank'
        >
                    <BsWhatsapp />
                     
</a>
                
            </motion.div>
        </section>
    )
}
