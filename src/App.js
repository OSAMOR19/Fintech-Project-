import React from 'react';
import MyNav from './components/Nav';
import Hero from './components/Hero';
import Comp from './components/Comprehensive';
import Plat from './components/Platform';
import Gen from './components/Generate';
import Pric from './components/Price';
import Fot from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <MyNav/>
      <Hero/>
      <Comp/>
      <Plat/>
      <Gen/>
      <Pric/>
      <Fot/>
    </React.Fragment>
  );
}

export default App;
