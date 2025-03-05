import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Tech Innovators",
    year: "2023",
    title: "Laravel E-Commerce Platform",
    description:
      "A fully-featured e-commerce platform built with Laravel and Tailwind CSS, designed for scalability and seamless user experience.",
    results: [
      { title: "Improved checkout process for better user experience" },
      { title: "Improved search functionality for more accurate results" },
      { title: "Optimized page load speed for better user experience" },
    ],
    technologies: ["Laravel", "Tailwind CSS", "Livewire", "MySQL"],
    link: "https://youtu.be/4k7IdSLxh6w",
    githubLink: "https://github.com/davarezza",
    image: darkSaasLandingPage,
    bgColor: "bg-gray-850",
    gradientFrom: "from-gray-800/30",
    gradientTo: "to-gray-900/30",
  },
  {
    company: "Creative Solutions",
    year: "2022",
    title: "Tailwind CSS Admin Dashboard",
    description:
      "A responsive admin dashboard built with Tailwind CSS and Alpine.js, offering a modern and intuitive interface for managing data.",
    results: [
      { title: "Improved visualization of data for easier analysis" },
      { title: "Provided reusable UI components for faster development" },
      { title: "Optimized mobile view for better user experience" },
    ],
    technologies: ["Tailwind CSS", "Alpine.js", "Laravel", "Vite"],
    link: "https://youtu.be/7hi5zwO75yc",
    githubLink: "https://github.com/davarezza",
    image: lightSaasLandingPage,
    bgColor: "bg-gray-850",
    gradientFrom: "from-gray-800/30",
    gradientTo: "to-gray-900/30",
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "Laravel SaaS Application",
    description:
      "A SaaS application built with Laravel and Inertia.js, designed to streamline business operations and improve user engagement.",
    results: [
      { title: "Supported user growth with scalable architecture" },
      { title: "Optimized API performance for better user experience" },
      { title: "Improved user retention through better UI/UX design" },
    ],
    technologies: ["Laravel", "Inertia.js", "Tailwind CSS", "Redis"],
    link: "https://youtu.be/Z7I5uSRHMHg",
    githubLink: "https://github.com/davarezza",
    image: lightSaasLandingPage,
    bgColor: "bg-gray-850",
    gradientFrom: "from-gray-800/30",
    gradientTo: "to-gray-900/30",
  },
  {
    company: "NextGen Tech",
    year: "2023",
    title: "Tailwind CSS Landing Page",
    description:
      "A high-conversion landing page built with Tailwind CSS and Laravel, optimized for performance and SEO.",
    results: [
      { title: "Improved Call-to-Action effectiveness for better conversion" },
      { title: "Optimized SEO strategy for better search engine ranking" },
      { title: "Improved page speed for better user experience" },
    ],
    technologies: ["Tailwind CSS", "Laravel", "Blade", "SEO"],
    link: "https://youtu.be/Z7I5uSRHMHg",
    githubLink: "https://github.com/davarezza",
    image: darkSaasLandingPage,
    bgColor: "bg-gray-850",
    gradientFrom: "from-gray-800/30",
    gradientTo: "to-gray-900/30",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase md:text-lg font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real World Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-center mt-4 mb-6 text-white">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore how I developed scalable and maintainable applications with a
          focus on performance, security, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className={`${project.bgColor} rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-50 pointer-events-none`}
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
                <h3 className="font-serif font-semibold text-xl mt-4 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  {project.description}
                </p>
                <hr className="border-t border-gray-800 my-4" />
                <ul className="flex flex-col gap-3">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-sm text-gray-400"
                    >
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
    </section>
  );
};
