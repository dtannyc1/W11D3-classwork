import {useState, useEffect} from 'react';
// import * as sample from '../../_assets/sample.json';

const Sample = (props) => {
    let data = require('../../_assets/sample.json');

    // useEffect(() => {
    //     const fetchFunc = async () => {
    //         try {
    //         const response = await fetch('../../_assets/sample.json',
    //             {
    //                 method: 'GET',
    //                 headers : {'Accept' : 'application/json'}
    //             });
    //         const data = await response.json();
    //         console.log(data)
    //         }
    //         catch {
    //             console.log("no good")
    //         }
    //     };
    //     fetchFunc();
    //     // const sample = fetchFunc();
    // }, [])
    console.log(data)
    return (
        <h2>Sample Component</h2>
    )
};

export default Sample;
