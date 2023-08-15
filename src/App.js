import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/About'; // Correct the import path for About component
import Roadmap from './components/sections/Roadmap'; // Correct the import path for Roadmap component
import Showcase from './components/sections/Showcase'; // Correct the import path for Showcase component
import Team from './components/sections/Team'; // Correct the import path for Team component
import Faq from './components/sections/Faq'; // Correct the import path for Faq component
import Footer from './components/Footer';

function App() {
  <div className="bg-primary w-full overflow-hidden"></div>
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
