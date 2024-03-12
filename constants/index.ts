export const navLinks = [
  {
    id: "register",
    title: "Register",
  },
  // {
  //   id: "about",
  //   title: "About",
  // },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Master Any Skill 🛠️",
    icon: "web.png",
  },
  {
    title: "Learn at Your Own Pace 🧠 Anytime🕒 Anywhere🌐",
    icon: "mobile.png",
  },
  {
    title: "Knowledge on Autopilot 🤖",
    icon: "backend.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "html",
  },
  {
    name: "CSS 3",
    icon: "css",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "React JS",
    icon: "reactjs",
  },
  {
    name: "Redux Toolkit",
    icon: "redux",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "Node JS",
    icon: "nodejs",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "Three JS",
    icon: "threejs",
  },
  {
    name: "git",
    icon: "git",
  },
  {
    name: "figma",
    icon: "figma",
  },
  {
    name: "docker",
    icon: "docker",
  },
];

const experiences = [
  {
    title: " Your Own Learning Boss",
    // company_name: "Starbuck",
    icon: "company/boss.png",
    iconBg: "#383E56",
    date: "",
    points: [
      "Tell us what you want to learn: Simply type in a skill or subject you're interested in, like langchain or node js.",
      "AI builds your path: Our smart AI assistant creates a personalized learning track just for you, step-by-step.",
      "Learn the way you like: Choose what you want to focus on and skip what you already know. It's all up to you!",
    ],
  },
  {
    title: "AI Makes Learning Easy",
    // company_name: "Tesla",
    // icon: tesla,
    iconBg: "#383E56",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "No more boring textbooks: Forget about dense paragraphs and confusing instructions. Our AI turns even tricky topics into fun, bite-sized lessons.",
      "Learn by doing: Practice what you learn with interactive quizzes and challenges. The more you do, the better you'll get!",
      "Get instant feedback: Don't wait for grades or results. Our AI checks your progress right away, so you know where you need a little extra effort.",
    ],
  },
  {
    title: "Knowledge on Autopilot:",
    // company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "No more endless searching: Forget about spending hours looking for the right courses or videos. Our AI finds the best learning resources for you, saving you time and energy.",
      "New stuff, right when you need it: Our AI keeps your learning path fresh by suggesting new topics and skills related to what you're already mastering.",
      "Always keep learning: No matter how much you know, there's always something new to explore. Our AI is your ever-growing library of knowledge, accessible anytime, anywhere.",
    ],
  },
  {
    title: "Learning Party Starts Now!",
    // company_name: "Meta",
    // icon: meta,
    iconBg: "#383E56",
    // date: "Jan 2023 - Present",
    points: [
      "Join the community: Connect with other learners who share your interests and goals.Ask questions, share tips, and motivate each other to keep learning.",
      "Make learning fun!: Learning doesn't have to be a chore. Play games, earn rewards, and challenge yourself in new ways.",
      "Celebrate your progress: Track your achievements and feel the satisfaction of conquering new skills.Learning is a journey, and we're here to cheer you on every step of the way!",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "carrent",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "jobit",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "tripguide",
    source_code_link: "https://github.com/",
  },
];
const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];
export { services, technologies, experiences, testimonials, projects, themes };
