import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Tentang from './components/pages/Tentang';
import Belanja from './components/pages/Belanja';
import Galleri from './components/pages/Galleri';
import Lowongan from './components/pages/Lowongan';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= 
        {Home}
        />
        <Route path='/Tentang' exact component= 
        {Tentang}
        />
        <Route path='/Belanja' exact component= 
        {Belanja}
        />
        <Route path='/Galleri' exact component= 
        {Galleri}
        />
        <Route path='/Lowongan' exact component= 
        {Lowongan}
        />
        <Route path='/SignUp' exact component= 
        {SignUp}
        />
      </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;
