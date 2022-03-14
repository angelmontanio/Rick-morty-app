import React from 'react';
import ResidentInfo from './ResidentInfo';
import './ResidentList.css'

const ResidentList = ({residents}) => {
    return (
        <div className='Resident-list'>
            <h3>Residents</h3>
            <main className='Resident-info-container'>
                {
                    residents?.map(resident => (
                        <ResidentInfo residentUrl={resident} key={resident}/>
                    ))
                }
            </main>
        </div>
    );
};

export default ResidentList;
