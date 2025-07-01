// components/CaseStudyCard.tsx
"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
// REMOVE: import Link from 'next/link'; // We won't use Link for modals
// REMOVE: import Image from 'next/image'; // Not used in this card
// REMOVE: import { projectsData } from '@/lib/data'; // Not used here

// Define a type for the Case Study props
type CaseStudyProps = {
    title: string;
    description: string;
    keywords: string[];
    link: string; // Still useful as an identifier for which card was clicked
    onClick: (link: string) => void; // Add an onClick prop
};

export default function CaseStudyCard({ title, description, keywords, link, onClick }: CaseStudyProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className='group mb-3 sm:mb-8 last:mb-0 cursor-pointer' // Add cursor-pointer to indicate clickable
            // Add the onClick handler here
            onClick={() => onClick(link)}
        >
            {/* REMOVE: <Link href={link} target="_blank" rel="noopener noreferrer"> */}
            <section
                className='bg-gray-100 max-w-[42rem] border
                    border-black/5 overflow-hidden
                    p-5 sm:p-8
                    hover:bg-gray-200 transition rounded-xl
                    dark:text-white dark:bg-white/10
                    dark:hover:bg-white/20'
                // Removed layout classes related to image positioning and alternating layout
            >
                <div className='flex flex-col h-full'>
                    <h3 className='text-2xl font-semibold'>
                        {title}
                    </h3>
                    <p className='mt-2 leading-relaxed text-gray-700
                                dark:text-white/70'>
                        {description}
                    </p>
                    <ul className='flex flex-wrap mt-4 gap-2
                                sm:mt-auto'>
                        {keywords.map((keyword, index) => (
                            <li
                                className='bg-black/[0.7] px-3 py-1 text-[0.7rem]
                                    uppercase
                                    tracking-wider text-white rounded-full dark:text-white/70'
                                key={index}
                            >
                                {keyword}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* REMOVE: </Link> */}
        </motion.div>
    );
}
