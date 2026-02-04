import { Briefcase } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Projeto de Logística de Engregas (em construção)",
    description: "Projeto com intuíto de colocar em prática meus conhecimentos sobre arquitetura de Microserviços",
    image: "🚚",
    tech: ["Java", "Springboot", "Arquitetura de Microserviços", "Docker"],
    github: "https://github.com/AugustoPBaldino/Logistica-de-Entregas",
    demo: "#"
  },
  {
    title: "CRUD + Autenticação(JWT) (Código concluído, produzindo demo)",
    description: "Projeto CRUD (Create, Read, Update, Delete) com autenticação JWT",
    image: "🔐",
    tech: ["Typescript", "NodeJS", "JWT"],
    github: "https://github.com/AugustoPBaldino/Crud_Authentication_JWT",
    demo: "#"
  },
  {
    title: "Matreya Sangha Brasil",
    description: "Landing Page criada para um colega com intuíto de promover a comunidade dedicada ao estudo, prática e vivência dos ensinamentos budistas",
    image: "🪷",
    tech: ["Html", "Css", "Javascript"],
    github: "https://github.com/AugustoPBaldino/Maitreya-Sangha-Brasil",
    demo: "https://maitreya-sangha-brasil.vercel.app/"
  },
  {
    title: "Projeto Leetcode (em construção)",
    description: "Criei esse projeto pessoal para consolidar como hábito a prática de fazer Leetcode",
    image: "🧠",
    tech: ["Typescript", "Python","VueJS", "Tailwind"],
    github: "https://github.com/AugustoPBaldino/interview-prep-leetcode-solutions",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section
      id="projetos"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
