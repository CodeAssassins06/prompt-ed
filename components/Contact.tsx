"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import EarthCanvas from "./canvas/Earth";
import { styles } from "./styles/styles";

const Contact = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "ML_VoiLabs",
          from_email: form.email,
          to_email: "voilabsml@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='background-light700_dark300 flex-[0.75] rounded-2xl p-8'
      >
        <p className={`${styles.sectionSubText} text-dark400_light700`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-dark400_light700`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-dark400_light500 mb-4 font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='text-dark300_light700 rounded-lg border-none bg-light-500/80  px-6 py-4 font-medium outline-none  placeholder:text-dark-500/50 dark:bg-dark-400 dark:placeholder:text-light-400'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-dark400_light500 mb-4 font-medium'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='text-dark300_light700 rounded-lg border-none bg-light-500/80  px-6 py-4 font-medium outline-none  placeholder:text-dark-500/50 dark:bg-dark-400 dark:placeholder:text-light-400'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-dark400_light500 mb-4 font-medium'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='text-dark300_light700 rounded-lg border-none bg-light-500/80  px-6 py-4 font-medium outline-none  placeholder:text-dark-500/50 dark:bg-dark-400 dark:placeholder:text-light-400'
            />
          </label>

          <button
            type='submit'
            className='shadow-primary ease w-fit rounded-xl bg-dark-400 px-8 py-3 font-bold text-light-700 shadow-sm outline-none duration-100 hover:bg-dark-200 dark:bg-light-500 dark:text-dark-300 dark:hover:bg-light-500/80'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='h-[350px] md:h-[550px] xl:h-auto xl:flex-1'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
