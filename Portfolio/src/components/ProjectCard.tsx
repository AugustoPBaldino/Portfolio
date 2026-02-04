import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all transform hover:scale-105 hover:-rotate-1">
      
      <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl border-b border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/20 group-hover:from-cyan-500/10 group-hover:to-blue-500/30 transition-all" />
        <span className="relative z-10 group-hover:scale-110 transition-transform">
          {image}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
          {title}
        </h3>

        <p className="text-slate-300 mb-4 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full border border-slate-600"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group/link"
          >
            <Github size={18} />
            <span className="text-sm font-medium">Código</span>
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group/link"
          >
            <ExternalLink size={18} />
            <span className="text-sm font-medium">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
