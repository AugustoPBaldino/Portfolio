import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import type { Section } from '../types/section'
import { SECTIONS } from '../types/section'

interface NavigationProps {
  activeSection: Section
  scrollToSection: (section: Section) => void
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
  className={`
    fixed w-full z-50 backdrop-blur-md transition-all duration-300
    ${scrolled
      ? 'bg-bg-nav shadow-[inset_0_-1px_0_0_rgb(var(--border-nav)/0.5)]'
      : 'bg-bg-nav-scrolled shadow-[inset_0_-1px_0_0_rgb(var(--border-nav-scrolled)/0.5)]'}
  `}
>

      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Nome */}
          <h1 className="text-2xl font-bold bg-gradient-name bg-clip-text text-transparent">
            Augusto Baldino
          </h1>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {SECTIONS.map(section => {
              const isActive = activeSection === section

              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    capitalize transition-colors
                    ${isActive ? 'text-text-accent' : 'text-text-primary'}
                  `}
                >
                  {section}
                </button>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn space-y-2">
            {SECTIONS.map(section => {
              const isActive = activeSection === section

              return (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section)
                    setMenuOpen(false)
                  }}
                  className={`
                    block w-full text-left py-2 capitalize transition-colors font-medium
                    ${isActive
                      ? 'text-text-accent font-semibold'
                      : 'text-text-primary font-normal'}
                  `}
                >
                  {section}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
