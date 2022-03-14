import React, { useEffect, useState } from 'react';
import './ResidentInfo.css';
import axios from 'axios';

const ResidentInfo = ({residentUrl}) => {

    const [character,setCharacter]=useState({})
    
    useEffect(()=>{
        axios.get(residentUrl)
            .then(res=>setCharacter(res.data))
    },[residentUrl])

    return (
        <div className='card'>
            <img src={character.image} alt="" />
            <div className='card--info'>
                <p><b>{character.name}</b></p>  
                <p><span> </span>{character.status} - {character.species}</p>
                <p className='data'>origin</p>
                <p>{character.origin?.name}</p>
                <p className='data'>episodes where appear</p>
                <p>{character.episode?.length}</p>
            </div>
        </div>

    );
};

export default ResidentInfo;