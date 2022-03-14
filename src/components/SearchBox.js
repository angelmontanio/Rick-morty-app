import React, { useState } from 'react';
import './SearchBox.css';
import axios from 'axios';

const SearchBox = ({setDimencion}) => {

    const [typeId,setTypeId]=useState("");

    const searchType = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then(res=>setDimencion(res.data))

    } 

    return (
        <div className='SearchBox'>
            <input type="text" 
                onChange={e=>(setTypeId(e.target.value))} 
                value={typeId}
            />
            <button onClick={()=>searchType()}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;