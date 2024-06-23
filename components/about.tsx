"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from './section-heading';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section 
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.175}}
            id='about'
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3" font-family="font-sans" font-size="text-">
                <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={20}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={[
                        "With a Bachelor's degree in Computer Science and a passion for innovation, I embarked on a journey to explore the realms of software engineering.",
                        "During my professional career and freelancing endeavors, I've honed my skills in front-end and back-end development, specializing in technologies like React.js, Redux, Node.js, and MongoDB.",
                        "I have a keen interest in Big Data, Web3, Distributed Systems, and I'm always eager to learn and apply new technologies to create innovative solutions."
                    ]}
                />
            </p>
        </motion.section>
    );
}
