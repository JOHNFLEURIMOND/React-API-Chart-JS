import React from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import Footer from '../components/Footer/Footer';
import MainHero from '../components/MainHero/MainHero';
import Chart from '../components/ProjectsSection/Chart';
import {
  Link, Route, BrowserRouter as Router, Switch
} from 'react-router-dom';

import { GlobalStyle, Container } from './layout/global-style';

const Homepage = (props) => {

  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <MainHero />
      <Chart />
      <Footer />
    </Container>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  </Router>
);

export default App;
