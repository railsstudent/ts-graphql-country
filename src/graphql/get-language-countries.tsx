import { gql } from '@apollo/client';

export const GET_LANGUAGE_COUNTRIES = gql`
    query LanguageCountries($filter: _LanguageFilter!) {
        language: Language(first: 1, filter: $filter) {
            id: _id
            name
            nativeName
            fluency @client
            countries(orderBy: [name_asc]) {
                id: _id
                name
                nativeName
                capital
                population
                flag {
                    id: _id
                    svgFile
                }
                currencies(orderBy: [_id_asc]) {
                    id: _id
                    code
                    name
                    symbol
                }
                timezones(orderBy: [_id_asc]) {
                    id: _id
                    name
                }
            }
        }
    }
`;
