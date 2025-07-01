// components/CaseStudies.tsx
'use client';
import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import CaseStudyCard from './caseStudyCard';
import DataBase from './caseStudies/dataBase'; // Import DataBase component

// Your caseStudiesData (keep this as is, 'link' will now act as an identifier)
const caseStudiesData = [
    {
        title: "YouTube Clone Build",
        description:
            "Explored building a YouTube clone with a modern interface and enhanced user experience, leveraging the Rapid API for seamless video streaming and interaction.",
        keywords: ["React", "axios", "react-player", "react-router-dom", "API Integration"],
        // This link value will now be used as an identifier for the modal
        link: "youtube-clone-modal",
    },
    {
        title: "Optimizing Database Queries",
        description: "A deep dive into identifying and resolving N+1 query problems in a large-scale application, leading to a 30% performance improvement.",
        keywords: ["Database", "SQL", "Performance", "Optimization", "N+1 Queries"],
        link: "/case-studies/db-optimization", // This one could still be a Link if you want a separate page
    },
    // ... add more case studies
];

export default function CaseStudies() {
    const { ref } = useSectionInView('CaseStudies');

    // State to keep track of which modal is currently open (using the 'link' as an identifier)
    const [activeModalLink, setActiveModalLink] = useState<string | null>(null);

    // Handler for when a card is clicked
    const handleCardClick = (link: string) => {
        // Check if the clicked card's link corresponds to the modal you want to show
        if (link === 'youtube-clone-modal') {
            setActiveModalLink(link); // Set the state to the identifier
        } else {
            // Handle navigation for other links if needed,
            // or do nothing if only this card opens a modal.
            // If others are Links, CaseStudyCard would need logic
            // to switch between onClick and Link based on a prop.
            // For this example, only 'youtube-clone-modal' opens a modal.
            console.log(`Card clicked with link: ${link}. No modal configured for this.`);
            // If you wanted other links to navigate, the CaseStudyCard
            // would need to revert to using <Link> based on the 'link' format.
            // For simplicity, this example assumes ONLY the youtube card opens a modal.
        }
    };

    // Handler to close the modal
    const closeModal = () => {
        setActiveModalLink(null); // Set state back to null
    };

    return (
        <> {/* Use a fragment as we might render the modal outside the main section */}
            <motion.section
                ref={ref}
                id='case-studies'
                className='mb-28 max-w-[90rem] text-center leading-8 sm:mb-40 scroll-mt-28'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 }}
            >
                <SectionHeading>Case Studies</SectionHeading>

                <div
                    className='
                    flex
                    flex-wrap
                    justify-center
                    gap-6
                    px-4
                    py-4
                    // overflow-x-auto  // Consider removing if you want wrapping instead of scrolling
                    sm:justify-start
                    '
                >
                    {caseStudiesData.map((study, index) => (
                        <React.Fragment key={index}>
                            <CaseStudyCard
                                {...study}
                                // Pass the click handler to each card
                                onClick={handleCardClick}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </motion.section>

            {/* Conditionally render the DataBase modal */}
            {activeModalLink === 'youtube-clone-modal' && (
                <DataBase onClose={closeModal} />
            )}

             {/* If you had other modals, you'd add more conditional renders here */}
             {/* activeModalLink === 'another-modal-identifier' && (
                 <AnotherModalComponent onClose={closeModal} />
             )*/}
        </>
    );
}
