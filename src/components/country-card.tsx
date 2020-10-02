import React from 'react';
import { CountryDetails, Currency, Timezone } from './types';

interface CountryProps {
    country: CountryDetails;
}

const currencyComp = (currencies: Currency[]) => {
    // console.log(currencies);
    return currencies.map((currency) => {
        const { id, code, symbol, name } = currency;
        return (
            <li key={id}>
                {name} / {code} ({symbol})
            </li>
        );
    });
};

const timezoneList = (timezones: Timezone[]) => {
    return timezones.map((timezone) => {
        const { id, name } = timezone;
        return (
            <li key={id}>
                {name}
            </li>
        );
    });
};

const CountryCard = ({ country }: CountryProps) => {
    // console.log(country);
    const {
        id,
        name,
        nativeName,
        capital,
        population,
        currencies,
        flag: { id: flagId, svgFile },
        timezones,
    } = country;

    const desc = `Flag of ${name}`;
    return (
        <div key={id} className="p-2 mb-2">
            <img
                className="my-0 mx-auto"
                key={flagId}
                alt={desc}
                src={svgFile}
                width="180"
                height="auto"
                title={desc}
            />
            <div className="text-center">
                <p>Name: {name}</p>
                <p>Native Name: {nativeName}</p>
                <p>Capital: {capital}</p>
                <p>Population: {population.toLocaleString()}</p>
                <p>Currencies:</p>
                <ul>{currencyComp(currencies)}</ul>
                <p>Timezones:</p>
                <ul>{timezoneList(timezones)}</ul>
            </div>
        </div>
    );
};

export default CountryCard;
