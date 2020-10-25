import React, { useState } from 'react';
import { CountryDetails, Currency, Timezone } from './types';

interface CountryProps {
    country: CountryDetails;
}

const currencyComp = (currencies: Currency[]) => {
    // console.log(currencies);
    return currencies.map((currency) => {
        const { id, code, symbol, name } = currency;
        return (
            <li key={id} className="text-center text-gray-600 text-base">
                {name} / {code} ({symbol})
            </li>
        );
    });
};

const timezoneList = (timezones: Timezone[]) => {
    return timezones.map((timezone) => {
        const { id, name } = timezone;
        return (
            <div
                key={id}
                className="text-gray-600 text-base flex-grow-0 flex-shrink"
                style={{ flexBasis: '33.33%' }}
            >
                <span className="flex justify-center">{name}</span>
            </div>
        );
    });
};

const getSecondaryInfo = (currencies: Currency[], timezones: Timezone[]) => {
    return (
        <>
            <p className="text-center italic text-gray-800 text-base">
                Currencies:
            </p>
            <ul>{currencyComp(currencies)}</ul>
            <p className="text-center italic text-gray-800 text-base">
                Timezones:
            </p>
            <div className="flex flex-wrap">{timezoneList(timezones)}</div>
        </>
    );
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
    const [show, setShow] = useState(false);

    return (
        <div
            key={id}
            className="p-8 m-3 flex-initial max-w-card w-20-rem shadow-lg rounded-lg"
            style={{flexBasis: '20rem'}}
        >
            <div className="mt-3 mb-2">
                <img
                    className="my-0 mx-auto"
                    key={flagId}
                    alt={`Flag of ${name}`}
                    src={svgFile}
                    width="180"
                    height="auto"
                    title={`Flag of ${name}`}
                />
            </div>
            <div className="tracking-tighter">
                <p className="text-center text-base">
                    <span className="italic text-gray-800 mr-1">Name:</span>{' '}
                    <span className="text-gray-600">{name}</span>
                </p>
                <p className="text-center text-base">
                    <span className="italic text-gray-800 mr-1">
                        Native Name:
                    </span>
                    <span className="text-gray-600">{nativeName}</span>
                </p>
                <p className="text-center text-base">
                    <span className="italic text-gray-800 mr-1">Capital:</span>
                    <span className="text-gray-600">{capital}</span>
                </p>
                <p className="text-center text-gray-600 text-base">
                    <span className="italic text-gray-800 mr-1">
                        Population:
                    </span>
                    <span className="text-gray-600">
                        {population.toLocaleString()}
                    </span>
                </p>
                <div className="text-center">
                    <a
                        href="#"
                        className="text-blue-500 text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            setShow(!show);
                        }}
                    >
                        Show {show ? 'less' : 'more'}
                    </a>
                </div>
                {show && getSecondaryInfo(currencies, timezones)}
            </div>
        </div>
    );
};

export default CountryCard;
