import React from 'react';
import Header from './Head/Head';
import Main from "./Main/main";
import Footer from "./Footer/Footer";
import img from "./Head/HeaderMenu/logo.png";


function App() {

  return (
      <body>
        <Header  className="header"></Header>
        <Main></Main>
        <Footer></Footer>
      </body>
  )
}

export default App;
