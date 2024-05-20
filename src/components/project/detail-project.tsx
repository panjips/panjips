import React from "react";
import Image from "next/image";
import Container from "@/components/container";
import Pills from "@/components/about/pills";
import { FaGithub } from "react-icons/fa";
import IconBorder from "@/components/contact/icon";
import Link from "next/link";

export const DetailProject = ({ slug }: { slug: string }) => {
  const dataProjects = [
    {
      id: 1,
      title: "Yogyakarta Tourism App",
      slug: "yogyakarta-tourism-app",
      image: "/images/mockup-app.png",
      description:
        "This project is about Yogyakarta Tourism App to help tourist to find the best place to visit in Yogyakarta. Purpose of this project to complete final project for Web Development subject with 5 team members, utilized Laravel, Flutter, Dart, PHP, MySQL to develop the API and mobile, successfully integrating various technologies to meet the project requirements. Implemented authentication and developed functionalities such as tourism information, user reviews, and rating to enhance the platform's usability.  Developed an attractive user interface consistent with the specified Figma design, ensuring the user experience satisfaction.",
      techStack: ["Laravel", "PHP", "Flutter", "Dart", "MySQL"],
      link: [
        {
          name: "Backend API Repository",
          url: "https://github.com/panjips/api_pariwisata",
        },
        {
          name: "Mobile Repository",
          url: "https://github.com/panjips/tubes_pbp",
        },
      ],
    },
    {
      id: 2,
      title: "Rent n Ride",
      slug: "rent-n-ride",
      image: "/images/mockup-rent-car.png",
      description:
        "This project is about Rent n Ride to help people to rent a car. Designed and implemented a rent vehicle web application with three team members, using Laravel, PHP, Bootstrap, MySQL, HTML, and CSS to ensure a comprehensive and functional product. Developed features enabling easy vehicle rental for users and efficient rental management for owners, resulting in a user-friendly platform facilitating seamless vehicle renting.",
      techStack: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      link: [
        {
          name: "GitHub Repository",
          url: "https://github.com/panjips/rent-car",
        },
      ],
    },
    {
      id: 3,
      title: "Portofolio Website",
      slug: "portofolio-website",
      image: "/images/mockup-porto.png",
      description:
        "This project is about my personal website. Purpose of this project to create a personal website to showcase my portfolio and skills. Developed a personal website using Next.js, JavaScript, and Tailwind CSS to showcase my portfolio and skills. Implemented a responsive design to ensure optimal user experience across devices, resulting in a visually appealing and user-friendly website. Integrated various technologies to create a dynamic and interactive website that effectively highlights my projects and capabilities.",
      techStack: ["Nextjs", "JavaScript", "Tailwind"],
      link: [
        {
          name: "GitHub Repository",
          url: "https://github.com/panjips/panjips",
        },
      ],
    },
    {
      id: 4,
      title: "Edusync Web API",
      slug: "edusync-web-api",
      image: "/images/mockup-edusync.png",
      description:
        "Edusync is a student management system that help teacher to orgnized their student. Developed an API for Student Management System that help teacher to orgnized their student. Developed with Typescript, Express.js, and PostgreSQL technologies in collaboration with a team member, designed from PRD and ERD, through to the execution coding phase. Created and managed project management on GitHub, adapting it to the project's needs to enhance workflow organization. Implemented features to handle student and teacher data management, including teacher authentication using JWT, class management, assignment grade recording, and ranking.",
      techStack: ["TypeScript", "Expressjs", "PostgreSQL"],
      link: [
        {
          name: "GitHub Repository",
          url: "https://github.com/panjips/edusync-api",
        },
      ],
    },
    {
      id: 5,
      title: "Walletfy Web API",
      slug: "walletfy-web-api",
      image: "/images/mockup-walletfy.png",
      description:
        "Walletfy is a API for mobile app to manage your budget and expense. Developed an API for a mobile app to manage your budget and expense. Developed an API for mobile apps using JavaScript, Next.js, PostgreSQL, and Prisma, aligning the implementation with PRD specifications. Implemented function to handle user authentication, expense tracking, and budget management. Created and managed project management, organizing tasks based on functionality for enhanced efficiency.",
      techStack: ["Nextjs", "JavaScript", "PostgreSQL"],
      link: [
        {
          name: "GitHub Repository",
          url: "https://github.com/panjips/walletfy-api",
        },
      ],
    },
    {
      id: 6,
      title: "Atma Kitchen Multiplatform",
      slug: "atma-kitchen-multiplatform",
      image: "/images/mockup-atma-kitchen.png",
      description:
        "Atma Kitchen is a project to complete Software Development subject. Developed a multiplatform application for Atma Kitchen, a restaurant that offers a variety of dishes. Collaborated with a team of 3 members to design and develop the application.Develop a multiplatform application (mobile and web) using JavaScript, Next.js, PHP, Laravel, Dart, Flutter, and MySQL in collaboration with two team members, successfully integrating various technologies. Created a functionality list based on the provided interview text, followed by designing an ERD and creating a database with a total of 19 tables. Completed coding phase 1 by handling tasks involving 2 master data, 1 operational data, and login authentication for both web and mobile platforms.",
      techStack: [
        "Laravel",
        "PHP",
        "Nextjs",
        "JavaScript",
        "Flutter",
        "Dart",
        "MySQL",
      ],
      link: [
        {
          name: "Backend GitHub Repository",
          url: "https://github.com/siwakasen/backend_p3l",
        },
        {
          name: "Frontend GitHub Repository",
          url: "https://github.com/siwakasen/frontend_p3l",
        },
        {
          name: "Mobile GitHub Repository",
          url: "https://github.com/siwakasen/mobile_p3l",
        },
      ],
    },
  ];

  const project = dataProjects.find((project) => project.slug === slug);
  return project === undefined ? (
    <>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />
    </>
  ) : (
    <>
      <Container className="bg-slate-950 flex-grow lg:py-4 lg:px-96 ">
        <div className="grid grid-cols-1 gap-3 lg:gap-6">
          <div className="w-full max-w-3xl h-auto mx-auto">
            <Image
              src={project!.image}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                maxWidth: "48rem",
                height: "auto",
                borderRadius: "1rem",
                margin: "auto",
              }}
            />
          </div>
          <h1 className="text-slate-100 font-bold text-2xl lg:text-4xl ">
            {project!.title}
          </h1>
          <p className="text-slate-400 font-light text-xs lg:text-sm text-justify leading-relaxed">
            {project!.description}
          </p>
          <div>
            <h6 className="text-slate-300 font-semibold text-xl lg:text-2xl ">
              Technologies
            </h6>
            <div className="mt-2 flex gap-3 flex-wrap">
              {project!.techStack.map((tech, index) => (
                <Pills key={index} title={tech}></Pills>
              ))}
            </div>
          </div>
          <div>
            <h6 className=" text-slate-300 font-semibold text-xl lg:text-2xl ">
              Link(s)
            </h6>
            <div className="flex gap-3 mt-2">
              {project!.link.map((link, index) => (
                <IconBorder key={index}>
                  <Link href={link.url}>
                    <FaGithub
                      size={32}
                      className="text-slate-500 group-hover:text-slate-300 group-hover:ease-in group-hover:transition group-hover:delay-150"
                    />
                  </Link>
                </IconBorder>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
