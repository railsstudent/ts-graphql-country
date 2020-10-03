import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps, Link, useParams } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { GET_LANGUAGE_COUNTRIES } from '../graphql/get-language-countries';
import { CountryDetails, CountryLanguage } from './types';
import CountryCard from './country-card';
import Rating from './rating';
import { acceptableLangs } from '../reactive-vars';

interface CountryProps extends RouteComponentProps {
    languageName?: string;
}

const BackLink = () => {
    return (
        <div className="mt-2">
            <Link to="/" className="underline text-gray-800 italic text-lg">
                Back
            </Link>
        </div>
    );
};

interface LanguageLevelProps {
    languages?: CountryLanguage[];
}

const getIcon = (
    score: number,
    total: number,
): { icon: IconProp; css: React.CSSProperties } => {
    const percentage = Math.floor((score * 100) / total);
    const icon: IconProp = percentage > 0 ? ['fas', 'check'] : ['fas', 'times'];
    let color = '';

    if (percentage >= 60) {
        color = 'green';
    } else if (percentage > 0) {
        color = 'rgb(250, 180, 0)';
    } else {
        color = 'red';
    }

    return {
        icon,
        css: { color },
    };
};

const LanguageLevel = (props: LanguageLevelProps) => {
    const { languages } = props;
    const defaultLangauge: CountryLanguage = {
        id: '',
        name: '',
        nativeName: '',
        countries: [] as CountryDetails[],
        fluency: { level: '', score: 0, total: 0 },
    };
    const [language = defaultLangauge] = languages || [];
    const {
        name,
        nativeName,
        countries,
        fluency: { level, score, total },
    } = language;
    const { icon, css } = getIcon(score, total);

    return (
        <>
            <h2 className="text-xl italic text-blue-400">
                {countries.length} countries/regions speak {name}/{nativeName}
            </h2>
            <div className="flex items-center text-lg text-gray-600">
                <span className="mr-2">Fluency: {level}</span>
                <FontAwesomeIcon icon={icon} style={css} />
            </div>
            <div className="flex items-center text-lg mb-2 text-gray-500">
                <span className="mr-2">Personal Rating:</span>
                <Rating
                    score={score}
                    total={total}
                    style={{ color: 'rgb(250, 180, 0)' }}
                />
            </div>
        </>
    );
};

const renderCountries = (languages: CountryLanguage[]) => {
    const defaultLangauge = {
        name: `default-${Date.now()}`,
        countries: [] as CountryDetails[],
    };
    const [language = defaultLangauge] = languages || [];
    const { countries } = language;
    return (
        <div className="p-4">
            <LanguageLevel key={language.name} languages={languages} />
            <div
                className="flex flex-wrap mt-6"
                style={{ alignContent: 'stretch' }}
            >
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
