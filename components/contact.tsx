"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useRef } from 'react';


export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef(null);
  

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] 
      text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shoaib.syed4@outlook.com">
          shoaib.syed4@outlook.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="flex flex-col mt-10 dark:text-black"
        action={async (formData) => {
      
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!")
          // Reset the form
          if (formRef.current) {
            (formRef.current as HTMLFormElement).reset();
          }  
        }}
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-10 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-[#f3f4f6] 
          dark:bg-opacity-10 dark:focus:bg-opacity-100 transition-all 
          dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}