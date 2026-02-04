/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* =========================
         CORES (tokens semânticos)
      ========================== */
      colors: {
        /* Navegação */
        bg: {
          nav: 'rgba(15, 23, 42, 0.95)',
          'nav-scrolled': 'rgba(15, 23, 42, 0.8)',
          section: 'rgb(var(--bg-section) / <alpha-value>)',
        },

        border: {
          nav: 'rgba(39, 39, 42, 1)',
          'nav-scrolled': 'rgba(39, 39, 42, 0.5)',
        },

        /* Texto */
        text: {
          primary: '#e2e8f0',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          accent: '#22d3ee',
        },

        /* Superfícies */
        surface: {
          muted: 'rgb(var(--surface-muted) / <alpha-value>)',
          card: 'rgb(var(--surface-card) / <alpha-value>)',
          'card-alt': 'rgb(var(--surface-card-alt) / <alpha-value>)',
        },

        /* Badges (skills) */
        badge: {
          fe: {
            from: 'rgb(var(--badge-fe-from) / <alpha-value>)',
            to: 'rgb(var(--badge-fe-to) / <alpha-value>)',
          },
          be: {
            from: 'rgb(var(--badge-be-from) / <alpha-value>)',
            to: 'rgb(var(--badge-be-to) / <alpha-value>)',
          },
          data: {
            from: 'rgb(var(--badge-data-from) / <alpha-value>)',
            to: 'rgb(var(--badge-data-to) / <alpha-value>)',
          },
        },

        /* Decorativos */
        decorative: {
          purple: 'rgb(var(--decorative-purple) / <alpha-value>)',
        },
      },

      /* =========================
         GRADIENTES
      ========================== */
      backgroundImage: {
        /* Globais */
        'gradient-name': 'var(--gradient-name)',
        'gradient-btn': 'var(--gradient-btn)',
        'gradient-btn-hover': 'var(--gradient-btn-hover)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-avatar': 'var(--gradient-avatar)',

        /* Badges */
        'badge-fe':
          'linear-gradient(to right, rgb(var(--badge-fe-from) / 0.2), rgb(var(--badge-fe-to) / 0.2))',
        'badge-fe-hover':
          'linear-gradient(to right, rgb(var(--badge-fe-from) / 0.3), rgb(var(--badge-fe-to) / 0.3))',

        'badge-be':
          'linear-gradient(to right, rgb(var(--badge-be-from) / 0.2), rgb(var(--badge-be-to) / 0.2))',
        'badge-be-hover':
          'linear-gradient(to right, rgb(var(--badge-be-from) / 0.3), rgb(var(--badge-be-to) / 0.3))',

        'badge-data':
          'linear-gradient(to right, rgb(var(--badge-data-from) / 0.2), rgb(var(--badge-data-to) / 0.2))',
        'badge-data-hover':
          'linear-gradient(to right, rgb(var(--badge-data-from) / 0.3), rgb(var(--badge-data-to) / 0.3))',
      },

      /* =========================
         ANIMAÇÕES
      ========================== */
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(-5px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
