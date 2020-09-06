import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LANGUAGES } from '../graphql/get-languags';
import { Language } from './types';
import LanguageCard from './language-card';

const LanguageList = () => {
    const { loading, error, data  } = useQuery(GET_LANGUAGES);

    if (loading) {
        return <p>Loading languages...</p>;
    }

    if (error) {
        return <p>Error occurs while loading languages</p>;
    }

    if (data && data.languages) {
        console.log('languages', data.languages);
    }

    const languages: Language[] = data.languages;
    return (
        <div>
            <h2>Languages</h2>
            <ul>
                { languages.map(language => 
                    <LanguageCard key={language.id} language={language} />) 
                }
           </ul>
        </div>
    );
}

export default LanguageList;
