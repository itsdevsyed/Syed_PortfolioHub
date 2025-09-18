'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const texts = [
    "Hello, I'm Syed, a Full Stack Engineer with expertise in front-end and back-end development.",
    "I specialize in creating dynamic and user-friendly websites and applications.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      ref={ref} id='home'
      className='mb-28 max-w-[48rem] text-center sm:mb-0 scroll-mt-[100rem] mx-auto'
    >
      {/* Profile Image */}
      <div className='flex items-center justify-center mb-6'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ type: "tween", duration: 1.8 }}
          >
            <Image
              src="/photo.png" alt="Syed"
              width={160}
              height={160}
              quality={100}
              priority
              className='h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover border-[0.15rem] border-blue shadow-lg'
            />
          </motion.div>
          <motion.span className='absolute bottom-1 right-1 text-2xl sm:text-3xl'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ type: "spring", stiffness: 125, delay: 0.2, duration: 0.6 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Animated Intro Text */}
      <motion.h1
        className='mb-10 px-4 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-snug lg:leading-snug'
        initial={{ opacity: 0, y: 50}}
        animate={{ opacity: 1, y: 0 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="block"
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      {/* Action Buttons + Social Links */}
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-base sm:text-lg font-medium'
        initial={{ opacity: 0, y: 50}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.2 }}
      >
        <a
          className='group bg-white px-6 py-2 sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer dark:bg-white/10'
          href='/Syed_Resume.pdf'
          download
        >
          Download CV
          <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
        </a>

        {[{
          icon: BsLinkedin,
          url: 'https://www.linkedin.com/in/itsdevsyed/'
        },{
          icon: BsGithub,
          url: 'https://github.com/itsdevsyed'
        },{
          icon: BsInstagram,
          url: 'https://instagram.com/ohh.xyed'
        },{
          icon: BsTwitter,
          url: 'https://twitter.com/itsdevsyed'
        }].map((social, idx) => (
          <a
            key={idx}
            className='bg-white p-3 sm:p-4 text-gray-700 flex items-center justify-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60'
            href={social.url} target='_blank'
          >
            <social.icon className='text-lg sm:text-xl' />
          </a>
        ))}
      </motion.div>
    </section>
  )
}
