import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps, Link, useParams } from '@reach/router';
import { GET_LANGUAGE_COUNTRIES } from '../graphql/get-language-countries';
import { CountryDetails, CountryLanguage } from './types';
import CountryCard from './country-card';
import { acceptableLangs } from '../reactive-vars';
import LanguageLevel from './language-level';

interface CountryProps extends RouteComponentProps {
    languageName?: string;
}

const BackLink = () => {
    return (
        <div>
            <Link to="/" className="underline text-gray-800 italic text-xl">Back</Link>
        </div>
    )
}

const renderCountries = (languages: CountryLanguage[]) => {
    const defaultLangauge = {
        countries: [] as CountryDetails[],
    };
    const [language = defaultLangauge] = languages || [];
    const { countries } = language;
    return (
        <div className="p-4">
            <LanguageLevel languages={languages} />
            <div className="flex flex-wrap">
                {countries.map((country) => (
                    <CountryCard key={country.id} country={country} />
                ))}
            </div>
            <BackLink />
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
            <p>Countries not found</p>
            <BackLink />
        </div>
    );
};

export default CountryList;
