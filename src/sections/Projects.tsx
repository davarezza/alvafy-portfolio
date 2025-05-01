import smkWebsiteGrade from "@/assets/images/projects/project1.png";
import restfulLibrary from "@/assets/images/projects/project-restful1.png";
import ticketingApp from "@/assets/images/projects/project4.png";
import thriftHaven from "@/assets/images/projects/project5.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Vocational Competency Exam Project",
    year: "2025",
    title: "Airline Ticket Booking App",
    description:
      "Full-stack flight reservation platform developed for my vocational competency exam, featuring multi-role access, seat selection, and complete booking management.",
    "results": [
    { "title": "Implemented multi-role authentication (admin/staff/passenger)" },
    { "title": "Developed interactive seat selection with real-time updates" },
    { "title": "Created admin panel for comprehensive flight management" },
    { "title": "Built responsive booking interface with payment integration" },
    { "title": "Designed responsive interface for all school stakeholders" }
  ],
    technologies: ["Laravel", "Tailwind CSS", "Bootstrap", "JavaScript", "MySQL", "Alpine.js", "JQuery"],
    link: "https://youtu.be/7hi5zwO75yc",
    githubLink: "https://github.com/davarezza/SkyRail-Ticketing-App",
    image: ticketingApp,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "School Academic Information System",
    description:
      "A comprehensive school management platform built with Laravel and Bootstrap for my 11th-grade final project, featuring role-based access control, grade management, and academic reporting.",
    results: [
      { "title": "Implemented secure authentication system with middleware protection" },
      { "title": "Developed CRUD functionality for teacher grade management" },
      { "title": "Created multi-role dashboard (admin, teacher, student)" },
      { "title": "Designed responsive interface for all school stakeholders" }
    ],
    technologies: ["Laravel", "Bootstrap", "JavaScript", "MySQL"],
    link: "https://youtu.be/4k7IdSLxh6w",
    githubLink: "https://github.com/davarezza/Academic-Laravel-8-App",
    image: smkWebsiteGrade,
  },
  {
    company: "Sekawan Media (Internship Project)",
    year: "2024",
    title: "RESTful Library API Backend",
    description:
      "Robust backend API system developed during my internship, implementing MVC architecture and database transactions for reliable media data processing.",
    results: [
      { "title": "Designed RESTful endpoints following industry best practices" },
      { "title": "Implemented secure database transactions for data integrity" },
      { "title": "Developed comprehensive API documentation using Postman" },
    ],
    technologies: ["Laravel", "Inertia.js", "Tailwind CSS", "Redis"],
    link: "https://youtu.be/Z7I5uSRHMHg",
    githubLink: "https://github.com/davarezza/Restful-API-Library",
    image: restfulLibrary,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Thrift Haven (Tokopedia Clone)",
    description:
      "An evolving e-commerce platform inspired by Tokopedia, built with Laravel and Bootstrap, laying foundation for comprehensive marketplace features.",
    results: [
      { "title": "Implemented core e-commerce functionality with product listings" },
      { "title": "Developed responsive storefront using Bootstrap components" },
      { "title": "Established scalable Laravel architecture for future expansion" },
    ],
    technologies: ["Laravel", "Bootstrap", "JavaScript", "MySQL"],
    link: "https://youtu.be/Z7I5uSRHMHg",
    githubLink: "https://github.com/davarezza/Laravel-ThriftHaven-App",
    image: thriftHaven,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="container pb-8">
      <SectionHeader
        title="Featured Projects"
        eyebrow="Real World Projects"
        description="Explore how I developed scalable and maintainable applications with a focus on performance, security, and user experience."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className={`bg-gray-850 rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative group`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 opacity-50 pointer-events-none`}
            />

            <div
              className="absolute inset-0 opacity-10 bg-cover bg-center -z-10"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>

            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-emerald-400 transition-colors duration-300"
                >
                  <ArrowUpRightIcon className="size-8" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ArrowUpRightIcon className="size-5" />
                </a>
              </div>
              <h3 className="font-semibold text-xl mt-4 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {project.description}
              </p>
              <hr className="border-t border-gray-800 my-4" />
              <ul className="flex flex-col gap-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-2 text-sm text-gray-400">
                    <CheckCircleIcon className="size-5 text-emerald-400" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="size-5 mr-2" />
                  Explore The Codebase
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
