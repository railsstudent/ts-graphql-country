import React from 'react';
import { CountryDetails, Currency, Timezone } from './types';

interface CountryProps {
    country: CountryDetails;
};

const currencyComp = (currencies: Currency[]) => {
    console.log(currencies);
    return (
        currencies.map(currency => {
            const { id, code, symbol, name } = currency;
            return (
                <li key={id} style={{ marginLeft: '2rem' }}>
                    { name } / { code } ({ symbol })
                </li>
            );
        })
    )
}

const timezoneList = (timezones: Timezone[]) => {
    return (
        timezones.map(timezone => {
            const { id, name } = timezone;
            return (
                <li key={id} style={{ marginLeft: '2rem' }}>
                    { name }
                </li>
            );
        })
    )
}

const CountryCard = ({ country }: CountryProps) => {
    console.log(country);
    const { id, name, nativeName, capital, population, currencies, flag: { id: flagId, svgFile }, timezones } = country;

    const desc = `Flag of ${name}`;
    return (
        <div key={id}>
            <img key={flagId} alt={desc} src={svgFile} width="180" height="auto" title={desc} />
            <p>Name: {name}</p>
            <p>Native Name: { nativeName }</p>
            <p>Capital: {capital}</p>
            <p>Population: { population.toLocaleString() }</p>
            <p>Currencies:</p>
            <ul>
            {  currencyComp(currencies) }
            </ul>
            <p>Timezones:</p>
            <ul>
            {  timezoneList(timezones) }
            </ul>
        </div>
    );
}

export default CountryCard;
