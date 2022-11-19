import React from 'react';
import './App.css';
import Hotels from '../Hotels/Hotels';
import data from '../../constants/data';

function App() {
  return (
    <section className="homes">
      <Hotels data={data.slice(0, 4)} />
    </section>
  );
}

export default App;
