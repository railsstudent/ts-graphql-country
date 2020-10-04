import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LANGUAGES } from '../graphql/get-languages';
import { Language } from './types';
import LanguageCard from './language-card';
import { RouteComponentProps } from '@reach/router';
import { acceptableLangs } from '../reactive-vars';

const LanguageCards = (languages: Language[]) => {
    return (
        <div className="flex flex-wrap" style={{ alignContent: 'stretch' }}>
            {languages.map((language) => (
                <LanguageCard key={language.id} language={language} />
            ))}
        </div>
    );
};

const LanguageList = (props: RouteComponentProps) => {
    const { loading, error, data } = useQuery(GET_LANGUAGES, 
        { variables: { names: acceptableLangs } });

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
        <div className="font-sans p-4">
            <h2 className="text-2xl italic text-blue-400">Foreign Languages</h2>
            {LanguageCards(data.languages)}
        </div>
    );
};

export default LanguageList;
