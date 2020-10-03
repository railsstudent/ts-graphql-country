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
            className="p-2 m-3 flex-auto max-w-card w-20-rem shadow-lg rounded-lg"
        >
            <div className="mt-3 mb-2">
                <img
                    className="my-0 mx-auto"
                    key={flagId}
                    alt={desc}
                    src={svgFile}
                    width="180"
                    height="auto"
                    title={desc}
                />
            </div>
            <div className="text-center tracking-tighter">
                <p className="text-base">
                    <span className="italic text-gray-800 mr-1">Name:</span>{' '}
                    <span className="text-gray-600">{name}</span>
                </p>
                <p className="text-base">
                    <span className="italic text-gray-800 mr-1">
                        Native Name:
                    </span>
                    <span className="text-gray-600">{nativeName}</span>
                </p>
                <p className="text-base">
                    <span className="italic text-gray-800 mr-1">Capital:</span>
                    <span className="text-gray-600">{capital}</span>
                </p>
                <p className="text-gray-600 text-base">
                    <span className="italic text-gray-800 mr-1">
                        Population:
                    </span>
                    <span className="text-gray-600">
                        {population.toLocaleString()}
                    </span>
                </p>
                <p className="italic text-gray-800 text-base">Currencies:</p>
                <ul>{currencyComp(currencies)}</ul>
                <p className="italic text-gray-800 text-base">Timezones:</p>
                <ul>{timezoneList(timezones)}</ul>
            </div>
        </div>
    );
};

export default CountryCard;
