import './App.css';
import Header from './components/Header'
import LocationInfo from './components/LocationInfo';
import SearchBox from './components/SearchBox';
import ResidentList from './components/ResidentList'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [dimencion,setDimencion]=useState({})

  useEffect(()=>{
    const random = Math.floor(Math.random()*126)+1;
    
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res=>setDimencion(res.data))
  },[]);


  return (
    
    <div className="App">
      <Header/>
      <div className="container">
        <SearchBox setDimencion={(setDimencion)}/>
        <LocationInfo dimencion={dimencion}/>
        <ResidentList residents={dimencion.residents}/>
      </div>
    </div>
  );
}

export default App;
