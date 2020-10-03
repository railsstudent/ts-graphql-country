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
            <li key={id} className="text-gray-600 text-base">
                {name} / {code} ({symbol})
            </li>
        );
    });
};

const timezoneList = (timezones: Timezone[]) => {
    return timezones.map((timezone) => {
        const { id, name } = timezone;
        return (
            <li key={id} className="text-gray-600 text-base">
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
        <div
            key={id}
            className="p-2 mb-2 flex-auto max-w-card"
            style={{ width: '25rem' }}
        >
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
                <p className="text-gray-800 text-base">Name: {name}</p>
                <p className="text-gray-600 text-base">
                    Native Name: {nativeName}
                </p>
                <p className="text-gray-800 text-base">Capital: {capital}</p>
                <p className="text-gray-600 text-base">
                    Population: {population.toLocaleString()}
                </p>
                <p className="text-gray-800 text-base">Currencies:</p>
                <ul>{currencyComp(currencies)}</ul>
                <p className="text-gray-800 text-base">Timezones:</p>
                <ul>{timezoneList(timezones)}</ul>
            </div>
        </div>
    );
};

export default CountryCard;
