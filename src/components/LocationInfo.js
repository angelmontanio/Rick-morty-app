    import React from 'react';
    import './LocationInfo.css'
    const LocationInfo = ({dimencion}) => {
        return (
            <div className='LocationInfo'>
                <h3>{dimencion.name}</h3>
                <div className='info'>
                    <p>
                        <b>Type: </b>{dimencion.type}
                    </p>
                    <p>
                        <b>Dimension: </b>{dimencion.dimension}
                    </p>
                    <p>
                        <b>Population: </b> {dimencion.residents?.length}
                    </p>
                </div>
            </div>
        );
    };
    
    export default LocationInfo;