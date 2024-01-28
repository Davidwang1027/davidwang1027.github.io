import React from 'react';
import Header from './components/Header/Header'; 
import Experience from './components/Experience/Experience';
import Projects from './components/Projects';
import CourseNotes from './components/CourseNotes';
import Personal from './components/Personal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Experience />
        {/* <Projects />
        <CourseNotes />
        <Personal />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
