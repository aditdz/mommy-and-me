import React from 'react';
// import Header from './components/Header';
// import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './screens/HomePage';
import ContactUS from './screens/ContactUs';
import Footer from './components/Footer';
import Header from './material-components/Header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/contact-us'>
            <ContactUS />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
