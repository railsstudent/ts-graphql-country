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
    if (percentage >= 60) {
        return {
            icon: ['fas', 'check'],
            css: { color: 'green' },
        };
    } else if (percentage > 0) {
        return {
            icon: ['fas', 'check'],
            css: { color: 'rgb(250, 180, 0)' },
        };
    }

    return {
        icon: ['fas', 'times'],
        css: { color: 'red' },
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
        <div>
            <div>
                <Link to="/">Back</Link>
            </div>
            <h2>
                Countries/Regions that speak {descName} (Total:{' '}
                {countries.length})
            </h2>
            <div style={{ display: 'flex', fontSize: '1.25rem' }}>
                <span style={{ marginRight: '0.5rem' }}>Fluency: {level}</span>
                <FontAwesomeIcon icon={icon} style={css} />
            </div>
            <div style={{ display: 'flex', fontSize: '1.25rem' }}>
                Personal Rating:{' '}
                <Rating
                    score={score}
                    total={total}
                    style={{ color: 'rgb(250, 180, 0)' }}
                />
            </div>
            {countries.map((country) => (
                <CountryCard key={country.id} country={country} />
            ))}
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
        <>
            <div>
                <Link to="/">Back</Link>
            </div>
            <p>Countries not found</p>
        </>
    );
};

export default CountryList;