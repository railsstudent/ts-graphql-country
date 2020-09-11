import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps, Link, useParams } from '@reach/router';
import { GET_LANGUAGE_COUNTRIES } from '../graphql/get-language-countries';
import { CountryDetails } from './types';
import CountryCard from './country-card';

interface CountryProps extends RouteComponentProps {
    languageName?: string;
};

type Data = {
    Language: {
        id: string;
        countries: CountryDetails[];
    }[];
}

const renderCountries = (prop: CountryProps, data: Data) => {
    const state = prop.location?.state as { name: string; nativeName: string };
    const descName = `${state.name} (${state.nativeName})`;
    const countries: CountryDetails[] = data && data.Language && data.Language.length > 0  ? 
        data.Language[0].countries : [];
    return (
        <div>
            <div>
                <Link to="/">Back</Link>
            </div>
            <h2>Countries that speak {descName}</h2>
            { countries.map(country => <CountryCard key={country.id} country={country} />)}
        </div>
    );
}

const CountryList = (prop: CountryProps) => {
    const params = useParams();
    const filter = {
        name: params.languageName
    };

    if (prop.location && prop.location.state) {
        const { loading, error, data } = useQuery(GET_LANGUAGE_COUNTRIES, {
            variables: { filter }
        });

        if (loading) {
            return <p>Loading countries...</p>;
        }

        if (error) {
            return <p>Error occurs while loading countries</p>;
        }

        if (data && data.Language) {
            console.log(data.Language);
        }

        return renderCountries(prop, data);
    }

    return (
        <>
            <div>
                <Link to="/">Back</Link>
            </div>
            <p>Countries not found</p>
        </>
    );
}

export default CountryList;
