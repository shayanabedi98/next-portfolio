import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

type Project = {
  name: string;
  description: string[];
  stack: { icon: JSX.Element; techName: string }[];
  images: { src: string; alt: string }[];
  github: string;
  deployment: string;
};

export const projects: Project[] = [
  {
    name: "GAME NSANITY",
    description: [
      "Built a website for YouTube channel to review video games.",
      "Improves online presence and professionalism for better game review opportunities.",
      "Features include user authentication, MongoDB for data, Prisma ORM, Cloudinary for images, YouTube API integration, and NextAuth for admin management.",
      "Completes CRUD operations with custom built REST APIs",
      "Includes dynamic subscriber count updates and admin tools for content management.",
    ],
    stack: [
      { icon: <SiTypescript />, techName: "TypeScript" },
      { icon: <FaReact />, techName: "React.js" },
      { icon: <SiNextdotjs />, techName: "Next.js" },
      { icon: <SiMongodb />, techName: "MongoDB" },
      { icon: <SiPrisma />, techName: "Prisma" },
      { icon: <SiTailwindcss />, techName: "Tailwind CSS" },
    ],
    images: [
      {
        src: "/assets/projects/gamensanity/1.webp",
        alt: "Screenshot of GAME NSANITY website",
      },
      {
        src: "/assets/projects/gamensanity/2.webp",
        alt: "Screenshot of GAME NSANITY website",
      },
      {
        src: "/assets/projects/gamensanity/3.webp",
        alt: "Screenshot of GAME NSANITY website",
      },
      {
        src: "/assets/projects/gamensanity/4.webp",
        alt: "Screenshot of GAME NSANITY website",
      },
      {
        src: "/assets/projects/gamensanity/5.webp",
        alt: "Screenshot of GAME NSANITY website",
      },
    ],
    github: "https://github.com/shayanabedi98/game-nsanity",
    deployment: "https://game-nsanity.vercel.app/",
  },
  {
    name: "Pantheras Digital",
    description: [
      "Launched with peers to provide comprehensive digital solutions.",
      "Services include SEO optimization, custom web development, design services, and social media management.",
      "The website acts as a portfolio and service showcase, designed to attract clients and enhance our digital footprint.",
      "Aims to establish a strong online presence for both the company and its clients.",
    ],
    stack: [
      { icon: <SiTypescript />, techName: "TypeScript" },
      { icon: <FaReact />, techName: "React.js" },
      { icon: <SiNextdotjs />, techName: "Next.js" },
      { icon: <SiTailwindcss />, techName: "Tailwind CSS" },
    ],
    images: [
      {
        src: "/assets/projects/pantheras/1.webp",
        alt: "Screenshot of Pantheras Digital website",
      },
      {
        src: "/assets/projects/pantheras/2.webp",
        alt: "Screenshot of Pantheras Digital website",
      },
      {
        src: "/assets/projects/pantheras/3.webp",
        alt: "Screenshot of Pantheras Digital website",
      },
      {
        src: "/assets/projects/pantheras/4.webp",
        alt: "Screenshot of Pantheras Digital website",
      },
    ],
    github: "https://github.com/shayanabedi98/panthera",
    deployment: "https://pantheras.ca/",
  },
  {
    name: "MTC Millwork",
    description: [
      "Developed for a client to enhance online visibility and customer acquisition",
      "Focuses on mill work industry, with a design reflecting the company's aesthetic.",
      "Fully responsive design for optimal user experience across devices.",
      "Built using Next.js and styled with Tailwind CSS.",
    ],
    stack: [
      { icon: <SiTypescript />, techName: "TypeScript" },
      { icon: <FaReact />, techName: "React.js" },
      { icon: <SiNextdotjs />, techName: "Next.js" },
      { icon: <SiTailwindcss />, techName: "Tailwind CSS" },
    ],
    images: [
      {
        src: "/assets/projects/mtc/1.webp",
        alt: "Screenshot of MTC Mill Work website",
      },
      {
        src: "/assets/projects/mtc/2.webp",
        alt: "Screenshot of MTC Mill Work website",
      },
      {
        src: "/assets/projects/mtc/3.webp",
        alt: "Screenshot of MTC Mill Work website",
      },
      {
        src: "/assets/projects/mtc/4.webp",
        alt: "Screenshot of MTC Mill Work website",
      },
      {
        src: "/assets/projects/mtc/5.webp",
        alt: "Screenshot of MTC Mill Work website",
      },
    ],
    github: "https://github.com/shayanabedi98/mtc-millwork",
    deployment: "https://mtcmillwork.com/",
  },
  {
    name: "BeatZilla",
    description: [
      "Created BeatZilla to display music production portfolio.",
      "Website is fully responsive for all devices.",
      "Includes a built-in audio player for music playback.",
      "Utilizes Tailwind CSS for design and Next.js for development.",
    ],
    stack: [
      { icon: <SiTypescript />, techName: "TypeScript" },
      { icon: <FaReact />, techName: "React.js" },
      { icon: <SiNextdotjs />, techName: "Next.js" },
      { icon: <SiTailwindcss />, techName: "Tailwind CSS" },
    ],
    images: [
      {
        src: "/assets/projects/beatzilla/1.webp",
        alt: "Screenshot of BeatZilla website",
      },
      {
        src: "/assets/projects/beatzilla/2.webp",
        alt: "Screenshot of BeatZilla website",
      },
      {
        src: "/assets/projects/beatzilla/3.webp",
        alt: "Screenshot of BeatZilla website",
      },
      {
        src: "/assets/projects/beatzilla/4.webp",
        alt: "Screenshot of BeatZilla website",
      },
    ],
    github: "https://github.com/shayanabedi98/beatzilla",
    deployment: "https://beatzilla.vercel.app/",
  },

  {
    name: "Stones Village",
    description: [
      "Developed for an employer, focusing on showcasing company services and inventory.",
      "Utilizes Next.js for its framework.",
      "Features detailed information on services provided by the company.",
      "Includes an extensive, filterable list of stone slab inventory for user convenience.",
    ],
    stack: [
      { icon: <SiTypescript />, techName: "TypeScript" },
      { icon: <FaReact />, techName: "React.js" },
      { icon: <SiNextdotjs />, techName: "Next.js" },
      { icon: <SiTailwindcss />, techName: "Tailwind CSS" },
    ],
    images: [
      {
        src: "/assets/projects/stonesvillage/1.webp",
        alt: "Screenshot of Stones Village website",
      },
      {
        src: "/assets/projects/stonesvillage/2.webp",
        alt: "Screenshot of Stones Village website",
      },
      {
        src: "/assets/projects/stonesvillage/3.webp",
        alt: "Screenshot of Stones Village website",
      },
      {
        src: "/assets/projects/stonesvillage/4.webp",
        alt: "Screenshot of Stones Village website",
      },
      {
        src: "/assets/projects/stonesvillage/5.webp",
        alt: "Screenshot of Stones Village website",
      },
    ],
    github: "https://github.com/shayanabedi98/stonesvillage-next",
    deployment: "https://www.stonesvillage.net/",
  },
];
