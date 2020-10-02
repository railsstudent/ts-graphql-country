import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps, Link, useParams } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { GET_LANGUAGE_COUNTRIES } from '../graphql/get-language-countries';
import { CountryDetails, LanguageFluency } from './types';
import CountryCard from './country-card';
import { acceptableLangs } from '../reactive-vars';
import Rating from './rating';

interface CountryProps extends RouteComponentProps {
    languageName?: string;
}

type Language = {
    id: string;
    name: string;
    nativeName: string;
    countries: CountryDetails[];
    fluency: LanguageFluency;
};

const getIcon = (
    score: number,
    total: number,
): { icon: IconProp; css: React.CSSProperties } => {
    const percentage = (score * 100) / total;
    const icon: IconProp = percentage > 0 ? ['fas', 'check'] : ['fas', 'times'];
    let css: { color: string };

    if (percentage >= 60) {
        css = { color: 'green' };
    } else if (percentage > 0) {
        css = { color: 'rgb(250, 180, 0)' };
    } else {
        css = { color: 'red' };
    }

    return {
        icon,
        css
    };
};

const renderCountries = (languages: Language[]) => {
    const defaultLangauge = {
        name: '',
        nativeName: '',
        countries: [],
        fluency: { level: '', score: 0, total: 0 },
    };
    const language =
        languages && languages.length > 0 ? languages[0] : defaultLangauge;
    const descName = `${language.name}/${language.nativeName}`;
    const countries: CountryDetails[] =
        language.countries && language.countries.length > 0
            ? language.countries
            : [];
    const {
        fluency: { level, score, total },
    } = language;

    const { icon, css } = getIcon(score, total);
    return (
        <div className="p-4">
            <div>
                <Link to="/" className="underline text-gray-800">Back</Link>
            </div>
            <h2 className="text-xl italic text-blue-400">
                Countries/Regions that speak {descName} (<span className="mr-2">Total:</span>
                {countries.length})
            </h2>
            <div className="flex items-center text-lg text-gray-600">
                <span className="mr-2">Fluency: {level}</span>
                <FontAwesomeIcon icon={icon} style={css} />
            </div>
            <div className="flex items-center text-lg mb-2 text-gray-600">
                <span className="mr-2">Personal Rating:</span>
                <Rating
                    score={score}
                    total={total}
                    style={{ color: 'rgb(250, 180, 0)' }}
                />
            </div>
            <div className="flex flex-wrap">
                {countries.map((country) => (
                    <CountryCard key={country.id} country={country} />
                ))}
            </div>
        </div>
    );
};

const CountryList = (prop: CountryProps) => {
    const params = useParams();
    const { languageName } = params;
    const filter = {
        name: languageName,
    };

    if (prop.location && acceptableLangs.indexOf(languageName) >= 0) {
        const { loading, error, data } = useQuery(GET_LANGUAGE_COUNTRIES, {
            variables: { filter },
        });

        if (loading) {
            return <p>Loading countries...</p>;
        }

        if (error) {
            return <p>Error occurs while loading countries</p>;
        }

        if (data && data.language) {
            // console.log(data.language);
            return renderCountries(data.language);
        }
    }

    return (
        <div className="p-4">
            <div>
                <Link to="/" className="underline text-gray-800">Back</Link>
            </div>
            <p>Countries not found</p>
        </div>
    );
};

export default CountryList;
