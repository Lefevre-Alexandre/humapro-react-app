import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './composants/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './composants/Contact';
import Accueil from './composants/Accueil';
import Erreur from './composants/Erreur';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
      </div>
      <Switch>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/" component={Accueil}></Route>
        <Route component={Erreur} />
      </Switch>
    </Router>
  );
}

export default App;
