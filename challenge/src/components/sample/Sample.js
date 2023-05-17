import {useState, useEffect} from 'react';
// import * as sample from '../../_assets/sample.json';

const Sample = (props) => {
    useEffect(() => {
        const fetchFunc = async () => {await fetch('../../_assets/sample.json', {headers : {'Accept' : 'application/json'}})
        .then(response => response.json())
        .then(json => console.log(json))
    
    };
        const sample = fetchFunc();
    }, [])
    return (
        <h2>Sample Component</h2>
    )
};

export default Sample; 