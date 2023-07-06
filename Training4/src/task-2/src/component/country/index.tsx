import React from 'react';

interface CountryProps {
    name: string,
    area: string,
    borders: [],
    flag: string
}

const Country = ({name, area, borders, flag}: CountryProps) => {
    return (
        <div className="country">
            <div  className="country-flag">
                <img src={flag} alt={name}/>
            </div>
            <div className="country-info">
                <h1>{name}</h1>
                <h3>Area: {area} km2</h3>
                <h3>Borders: {borders.join(', ')}</h3>
            </div>
        </div>
    );
};

export default Country;