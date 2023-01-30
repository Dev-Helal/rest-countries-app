import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, name , population,flags,capital} = props.country;
    console.log(props.country)
    return (
            <div className='country'>
                <p>Area : {area}</p>
                <h2>Country Name : {name.common}</h2>
                <h4>Capital : {capital}</h4>
                <p>Population : {population}</p>
                <p>Region : {region}</p>
                <img src={flags.png} alt="" />
            </div>
    );
};

export default Country;