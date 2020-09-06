import React from 'react';
import { CountryDetails } from './types';

interface CountryProps {
    country: CountryDetails;
};

const CountryCard = ({country}: CountryProps) => {
    return (
        <p key={country.id}>{country.name}, { country.nativeName }</p>
    );
}

export default CountryCard;
