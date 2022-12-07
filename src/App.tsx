import React from 'react';
import Header from './components/Header.js';
import Work from './components/WorkExperience.js';
import Ed from './components/Education.js';
import Tech from './components/Technology.js';
import './App.css';

function App() {
  return (
    <div className="App">
          <body>
              <Header />
              <main className="container">
                  <div className="row mt-3">
                    <Work />
                    <Ed />
                  </div>
                  <Tech />
              </main>
              
          </body>

    </div>
  );
}

export default App;
