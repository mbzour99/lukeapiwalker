// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello every one </h1>






//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';

import { Router, Link } from '@reach/router';
import LukeData from './components/LukeData';
import Luke from './components/Luke';

function App() {

  const [data, setData] = useState({});

  const [inputs, setInputs] = useState({
    resource: "people",
    id: false
  });

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <section className="form">
        <Luke inputs={inputs} setInputs={setInputs}/>
      </section>
      <main>
        <Router>
          <LukeData path="/:resource/:id" data={data} setData={setData} inputs={inputs} setInputs={setInputs}/>
        </Router>
      </main>
    </>
  );
}

export default App;