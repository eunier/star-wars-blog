import React from 'react';

import Navbar from './components/Navbar';
import Character from './components/Characters';

const App = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Character />
  </div>
);

export default App;
