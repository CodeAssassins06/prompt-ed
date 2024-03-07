"use client"
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "./styles/styles";
import SectionWrapper from "@/hoc/SectionWrapper";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5'
      >
        <Image
          src={`/assets/${icon}`}
          width={16}
          height={16}
          alt='web-development'
          className='size-16 object-contain'
        />

        <h3 className='text-center text-[20px] font-bold text-white'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'
      >
        Imagine a revolutionary AI-powered learning platform where you simply type a desired skill, like &quot;langchain,&quot; and instantly get a personalized, comprehensive learning path with AI-generated courses, interactive knowledge checks, and continuous progress tracking.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
