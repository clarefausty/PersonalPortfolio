
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Head from './components/header/Head';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="container-app">
      <Head/>
      <Nav/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
