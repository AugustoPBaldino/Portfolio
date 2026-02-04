import { User, Heart } from "lucide-react";

const About = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "VueJS", "Tailwind CSS"],
    dados: ["Python", "Postgres", "MongoDB"],
    backend: ["Java", "Spring Boot", "NodeJS", "C#", "Typescript", "Python"],
  };

  const interests = [
    { icon: "⌨️", text: "Código como ferramenta, não como fim" },
    { icon: "🚶‍♂️", text: "Atividade Física ao ar livre" },
    { icon: "🎵", text: "Música para programar" },
    { icon: "☕", text: "Amante de café" },
  ];

  return (
  <section
  id="sobre"
  className="py-20 px-6 bg-slate-800 relative overflow-hidden"
>

      {/* Glow decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-decorative-purple/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <div className="flex items-center gap-3 mb-12">
          <User className="text-text-accent" size={32} />
          <h2 className="text-4xl font-bold bg-gradient-name bg-clip-text text-transparent">
            Sobre Mim
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Texto */}
          <div>
            <p className="text-text-primary leading-relaxed mb-6">
              Olá! Sou um desenvolvedor de software com enfoque em desenvolvimento
              web. Atualmente, curso Engenharia de Software na PUCRS, onde tenho
              aprimorado meus conhecimentos e estudado as melhores práticas com
              relação ao ciclo de software de maneira geral.
            </p>

            <p className="text-text-primary leading-relaxed mb-6">
              Trabalho profissionalmente como desenvolvedor com Vue.js, criando
              aplicações web modernas e escaláveis. Tenho experiência em todo o
              ciclo de desenvolvimento, desde o planejamento até a entrega e
              manutenção de projetos.
            </p>

            <p className="text-text-primary leading-relaxed mb-8">
              Estou sempre em busca de novos desafios e oportunidades para crescer
              como desenvolvedor, aplicando conhecimentos tanto acadêmicos quanto
              práticos na criação de soluções tecnológicas inovadoras.
            </p>

            {/* Interesses */}
            <div className="bg-gradient-to-r from-surface-card to-surface-card-alt/100 p-6 rounded-xl border border-border-nav">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Heart className="text-red-400" size={20} />
                Interesses
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {interests.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-text-primary text-sm"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Habilidades
            </h3>

            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">
                  Front-end
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer
                      bg-badge-fe border border-badge-fe-from/30 text-text-accent
                      hover:bg-badge-fe-hover transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">
                  Back-end
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer
                      bg-badge-be border border-badge-be-from/30 text-orange-300
                      hover:bg-badge-be-hover transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dados */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">
                  Dados
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.dados.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer
                      bg-badge-data border border-badge-data-from/30 text-emerald-300
                      hover:bg-badge-data-hover transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;