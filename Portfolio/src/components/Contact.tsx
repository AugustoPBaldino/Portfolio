import { MessageSquare, Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contato"
      className="py-20 px-6 bg-inherit relative overflow-hidden"
    >
      {/* Glow decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-decorative-purple/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <div className="flex items-center gap-3 mb-12">
          <MessageSquare className="text-text-accent" size={32} />
          <h2 className="text-4xl font-bold bg-gradient-name bg-clip-text text-transparent">
            Entre em Contato
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-text-primary text-lg mb-8 leading-relaxed">
            Estou sempre aberto a novas oportunidades e conversas.
            Se você tem um projeto em mente ou apenas quer dizer oi,
            fique à vontade para entrar em contato!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div
              className="group p-6 bg-surface-card rounded-xl border border-border-nav
                         hover:border-text-accent hover:shadow-xl hover:shadow-text-accent/10
                         transition-all transform hover:scale-105"
            >
              <Mail
                className="mx-auto mb-3 text-text-accent group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-semibold mb-1 text-white">Email</h3>
              <p className="text-sm text-text-secondary break-words">
                augustoperonibaldino@gmail.com
              </p>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-surface-card rounded-xl border border-border-nav
                         hover:border-text-accent hover:shadow-xl hover:shadow-text-accent/10
                         transition-all transform hover:scale-105"
            >
              <Github
                className="mx-auto mb-3 text-text-accent group-hover:rotate-12 transition-transform"
                size={32}
              />
              <h3 className="font-semibold mb-1 text-white">GitHub</h3>
              <p className="text-sm text-text-secondary">AugustoPBaldino</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-surface-card rounded-xl border border-border-nav
                         hover:border-text-accent hover:shadow-xl hover:shadow-text-accent/10
                         transition-all transform hover:scale-105"
            >
              <Linkedin
                className="mx-auto mb-3 text-text-accent group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-semibold mb-1 text-white">LinkedIn</h3>
              <p className="text-sm text-text-secondary">Augusto Baldino</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
