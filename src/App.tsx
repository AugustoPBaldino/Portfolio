import React from 'react';
import Header from './components/Header';
import Person from './components/Person';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './lib/i18n';

const App: React.FC = () => {


  return (
    <>
      <Header/>
      <Person />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
