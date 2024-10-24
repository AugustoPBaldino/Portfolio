import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          title: "Augusto Baldino",
          home: "Home",
          about: "Sobre",
          projects: "Projetos",
          contacts: "Contatos",
          aboutSubtitle: "Desenvolvedor Full Stack",
          aboutDescription: "Sou um desenvolvedor Full Stack com experiências em HTML, CSS, Java, Spring-Boot, Javascript e NodeJS.",
          aboutPersonalInfo: "Meu nome é Augusto Baldino, tenho 21 anos. Estou buscando uma oportunidade para aperfeiçoar minhas habilidades como desenvolvedor. Sou um engenheiro de software no 6° semestre da graduação.",
          aboutCurriculumText: "Abaixo está o meu currículo para download.",
          aboutButtonText: "Currículo",
          contactsTitle: "Contato",
          location: "Localização",
          locationDetail: "Porto Alegre, Brasil",
          email: "E-mail",
          footerMadeWith: "Feito com",
          by: "por",
          footerCopyright: "Augusto Baldino © 2024",
          personHello: "Olá",
          personMyName: "Meu nome é",
          techs: "Techs",
          projectsTitleAges: "Projetos AGES",
          projectsTitle: "Projetos pessoais",
          aboutSubtitleAges: "Projetos desenvolvidos na Agência Experimental de Engenharia de software (AGES). Na qual trabalhamos em projetos que desenvolvem nossas soft e hard skills em projetos reais com clientes reais.",
          project1Description: "Plataforma mobile para pessoas com restrições alimentares.",
          project2Description: "Aplicativo para avaliação das competências clínicas dos estudantes do curso de odontologia da PUCRS. Nesse projeto fui responsável por desenvolver a arquitetura do banco de dados Postgres e desenvolvimento Back-end com Spring-Boot.",
          project3Title: "Projeto CRUD + Autenticação",
          project3Description: "Aplicação CRUD com autenticação de usuários utilizando Nodejs e Mongodb.",
          project4Title: "Aplicação de previsão do tempo",
          project4Description: "Aplicação utilizando API de previsão do tempo e geolocalização utilizando Html, Css e Javascript.",
          code: "Código",
          project5Title: "Projeto Lista de Filmes",
          project5Description: "Projeto CRUD para gerenciamento de filmes e usuários. Utilizei Prisma como ORM, Postgres para o banco de dados e TypeScript."
          
        },
      },
      en: {
        translation: {
          title: "Augusto Baldino",
          home: "Home",
          about: "About",
          projects: "Projects",
          contacts: "Contacts",
          aboutSubtitle: "Full Stack Developer",
          aboutDescription: "I am a Full Stack Developer with experience in HTML, CSS, Java, Spring-Boot, Javascript and NodeJS.",
          aboutPersonalInfo: "My name is Augusto Baldino, I am 21 years old. I am looking for an opportunity to improve my skills as a developer. I am a software engineering student in the 6th semester.",
          aboutCurriculumText: "Below is my curriculum for download.",
          aboutButtonText: "Curriculum",
          contactsTitle: "Contact",
          location: "Location",
          locationDetail: "Porto Alegre, Brazil",
          email: "E-mail",
          footerMadeWith: "Made with",
          by: "by",
          footerCopyright: "Augusto Baldino © 2024",
          personHello: "Hello",
          personMyName: "My name is",
          techs: "Techs",
          projectsTitleAges: "Projecs AGES",
          projectsTitle: "Personal projects",
          aboutSubtitleAges: "Projects developed at the Experimental Agency for Software Engineering (AGES). In which we work on projects that develop our soft and hard skills in real projects with real clients.",
          project1Description: "Mobile platform for people with dietary restrictions.",
          project2Description: "Application for evaluation of clinical skills of students of dentistry course of PUCRS. In this project I was responsible for developing the Postgres database architecture and Back-end development with Spring-Boot.",
          project3Title: "CRUD + Authentication Project",
          project3Description: "CRUD application with user authentication using NodeJS and Mongodb.",
          project4Title: "Weather Forecast Application",
          project4Description: "Application using weather forecast API and geolocation using Html,Css e Javascript.",
          code: "Code",
          project5Title: "Movie List Project",
          project5Description: "A CRUD project for managing movies and users. Used Prisma as ORM, PostgreSQL for the database, and TypeScript."
        },
      },
    },
    lng: "pt", 
    fallbackLng: "pt", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
