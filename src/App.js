import { Controller } from "./Components/layout/context/Context";
import Header from './Components/navigation/header/Header.jsx';
import Footer from './Components/navigation/footer/Footer.jsx';

import Home from './Components/pages/home/Home.jsx';
import About from './Components/pages/about/About.jsx';
import Skills from './Components/pages/skils/Skills.jsx';
import Word from './Components/pages/word/Word.jsx';
import Contact from './Components/pages/contact/Contact.jsx';
function App() {
  return (
    <Controller>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Word/>
      <Contact/>
      <Footer/>
    </Controller>
  );
}

export default App;
