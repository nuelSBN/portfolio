import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import PersonalInfo from './components/personal/PersonalInfo';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <div className="topHead">
        <Header />
        <Hero />
      </div>
      <Banner />
      <Skills />
      <Portfolio />
      <PersonalInfo />
    </div>
  );
}

export default App;
