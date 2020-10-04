import { gql } from '@apollo/client';

export const GET_LANGUAGES = gql`
    query getLanguages($names: [String!]) {
        languages: Language(
            filter: {
                name_in: $names
            }
            orderBy: [name_asc]
        ) {
            id: _id
            name
            nativeName
            countries(orderBy: [name_asc]) {
                id: _id
                name
                population
                flag {
                    id: _id
                    emoji: svgFile
                }
            }
        }
    }
`;
