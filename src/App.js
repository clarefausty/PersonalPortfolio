
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Head from './components/header/Head';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="container-app">
      <Head/>
      <Nav/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
