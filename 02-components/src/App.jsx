import React from 'react';
import Card from './assets/Components/Card';
import Navbar from './assets/components/navbar';


const App = () => {
  return (
     
    <div>
       <Navbar />
      <div className="card">
        <h1>pooja mandal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    
      <Card />
    </div>
  );
};

export default App;