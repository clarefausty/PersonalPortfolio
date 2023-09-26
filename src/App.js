
import './App.css';
import About from './components/about/About';
import Head from './components/header/Head';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="container-app">
      <Head/>
      <Nav/>
      <About/>
    </div>
  );
}

export default App;
