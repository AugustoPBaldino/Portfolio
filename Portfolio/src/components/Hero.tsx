import { useEffect, useState } from 'react'
import {
  Sparkles,
  Coffee,
  Rocket,
  Download,
  Github,
  Linkedin,
} from 'lucide-react'
import type { Section } from '../types/section'
import profile_image from '../assets/images/Augusto_Baldino_Foto_Formal-photoaidcom-cropped.jpg'
import curriculo from '../assets/Curriculo_Augusto.pdf'
interface HeroProps {
  scrollToSection: (section: Section) => void
}


const Hero = ({ scrollToSection }: HeroProps) => {
  const fullText = 'Desenvolvedor Full-stack'
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(interval)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="pt-24 pb-16 px-6 relative overflow-hidden bg-gradient-hero"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Texto */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="animate-pulse text-text-accent" size={20} />
              <p className="font-semibold text-lg text-text-accent">
                Olá, meu nome é
              </p>
            </div>

            <h1 className="text-5xl md:text-4xl font-bold mb-4 bg-gradient-name bg-clip-text text-transparent">
              Augusto Baldino
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 h-12 text-text-accent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-text-primary text-lg mb-4 leading-relaxed">
              Sou desenvolvedor de software com foco em desenvolvimento web.
              Me dedico ao estudo e à aplicação de boas práticas ao longo de todo
              o ciclo de desenvolvimento de software.
            </p>

            <div className="flex items-center gap-2 mb-8 text-text-primary">
              <Coffee size={18} className="text-text-accent" />
              <span className="text-sm">
                Transformando café em código desde 2022
              </span>
            </div>

            {/* Botões */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projetos')}
                className="group px-8 py-3 bg-gradient-btn text-white rounded-lg
                transition-all transform hover:scale-105 hover:bg-gradient-btn-hover
                hover:shadow-lg hover:shadow-cyan-500/40 flex items-center gap-2"
              >
                Ver Projetos
                <Rocket
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <a
                href={curriculo}
                download
                className="px-8 py-3 border-2 border-text-accent text-text-accent
                rounded-lg transition-all flex items-center gap-2
                hover:scale-105 transform"
              >
                <Download size={20} />
                Currículo
              </a>
            </div>

            {/* Redes */}
            <div className="flex gap-4">
              {[
                {
                  icon: <Github size={24} />,
                  href: 'https://github.com/AugustoPBaldino',
                },
                {
                  icon: <Linkedin size={24} />,
                  href: 'https://www.linkedin.com/in/augusto-baldino-730ba1248/',
                },
              ].map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-transform hover:scale-110 text-text-secondary"
                >
                  <div className="p-2 rounded-lg bg-surface-muted/50 group-hover:bg-text-accent/10 transition-colors">
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse bg-gradient-avatar" />
              <div className="relative w-80 h-80 rounded-full flex items-center justify-center shadow-2xl animate-float bg-gradient-avatar">
                <img
                  src={profile_image}
                  alt="Foto de Augusto Baldino"
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
