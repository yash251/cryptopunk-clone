import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard'
import { useState, useEffect } from 'react'
import axios from 'axios';
import PunkList from './components/PunkList';

function App() {

  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x07dEe7a6db902717235C78f53764AAEfECABfA74&order_direction=asc'
      )
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    }

    getMyNfts();    
  }, []);
  
  return (
    <div className='app'>
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
