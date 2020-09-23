import React from 'react';
import { Language } from './types';
import { Link } from '@reach/router';

interface LanguageProp {
    language: Language;
}

const LanguageCard = ({ language }: LanguageProp) => {
    const { id, name, nativeName, countries } = language;
    const emojiCountries = countries.filter(
        (c) => c && c.flag && !!c.flag.emoji,
    );
    const totalPopulation = countries.reduce((acc, c) => acc + c.population, 0);

    return (
        <div>
            <p>
                Name:{' '}
                <Link to={`countries/${name}`}>
                    {name}/{nativeName}
                </Link>
            </p>
            <div>
                <p>Countries (Total: {countries.length})</p>
                <p>Total Population: {totalPopulation.toLocaleString()} </p>
                <div>
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
                                className="country"
                                title={title}
                                key={countryId}
                            >
                                <span className="emoji">{emoji}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LanguageCard;
