import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LANGUAGES } from '../graphql/get-languags';
import { Language } from './types';
import LanguageCard from './language-card';
import { RouteComponentProps } from '@reach/router';

const LanguageCards = (languages: Language[]) => {
    return (
        <ul>
            {languages.map((language) => (
                <li key={language.id}>
                    <LanguageCard key={language.id} language={language} />
                </li>
            ))}
        </ul>
    );
};

const LanguageList = (props: RouteComponentProps) => {
    const { loading, error, data } = useQuery(GET_LANGUAGES);

    if (loading) {
        return <p>Loading foreign languages...</p>;
    }

    if (error) {
        return <p>Error occurs while loading foreign languages</p>;
    }

    // if (data && data.languages) {
    //     console.log('languages', data.languages);
    // }

    return (
        <div>
            <h2>Foreign Languages</h2>
            {LanguageCards(data.languages)}
        </div>
    );
};

export default LanguageList;
