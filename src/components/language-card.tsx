import React from 'react';
import { Language } from './types';
import { Link } from '@reach/router';

interface LanguageProp {
    language: Language;
}

const LanguageCard = ({ language }: LanguageProp) => {
    const { name, nativeName, countries } = language;
    const emojiCountries = countries.filter(
        (c) => c && c.flag && !!c.flag.emoji,
    );
    const totalPopulation = countries.reduce((acc, c) => acc + c.population, 0);

    return (
        <div className="flex-auto max-w-xs p-4 mb-2 mx-3 shadow-lg rounded-lg">
            <p className="text-lg text-gray-700">
                <span className="mr-2">Name:</span>
                <Link to={`countries/${name}`} className="underline">
                    {name}/{nativeName}
                </Link>
            </p>
            <div className="countries">
                <p className="text-base text-gray-600">
                    Countries/Regions: {countries.length}
                </p>
                <p className="text-base text-gray-600">
                    Total Population: {totalPopulation.toLocaleString()}{' '}
                </p>
                <div className="flags">
                    {emojiCountries.map((country) => {
                        const {
                            id: countryId,
                            name: countryName,
                            flag: { emoji },
                            population,
                        } = country;
                        const title = `${countryName}: ${population.toLocaleString()}`;
                        return (
                            <div
                                className="inline-block"
                                title={title}
                                key={countryId}
                            >
                                <img
                                    src={emoji}
                                    className="mx-1"
                                    style={{ cursor: 'pointer' }}
                                    width="35"
                                    height="auto"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LanguageCard;
