import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className='app'>
      <Header />
      <CollectionCard 
        id={0} 
        name={'King Punk'} 
        traits={[{ value : 7 }]} 
        image='https://i.imgur.com/ARwnIqd.jpeg' 
      />
    </div>
  );
}

export default App;
