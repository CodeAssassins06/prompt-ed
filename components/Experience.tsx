"use client"
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { styles } from "./styles/styles";
import Image from "next/image";

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex size-full items-center justify-center'>
          {experience.icon && <Image
            src={`/assets/${experience.icon}`}
            alt={experience.company_name}
            height={40}
            width={40}
            className='size-[60%] object-contain'
          />}
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold text-white'>{experience.title}</h3>
        <p
          className='text-[16px] font-semibold text-secondary'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='ml-5 mt-5 list-disc space-y-2'>
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 pl-1 text-[14px] tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Our product will provide you ease in following areas
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Features
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
