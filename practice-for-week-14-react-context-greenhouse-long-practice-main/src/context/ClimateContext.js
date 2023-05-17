// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import {useContext, createContext, useState } from 'react';

export const ClimateContext = createContext();

export const ClimateProvider = (props) => {
    const [Temperature, setTemperature] = useState(50);
    const [Humidity, setHumidity] = useState(40);

    return (
        <ClimateContext.Provider value={{Temperature, setTemperature, Humidity, setHumidity}} >
            {props.children}
        </ClimateContext.Provider>
    )
};

export const UseClimateContext = () => {
    return useContext(ClimateContext);
};