import { gql } from '@apollo/client';

export const GET_LANGUAGES = gql`
    query getLanguages {
        languages: Language(
            filter: { name_in: [
                "Chinese",
                "Korean"
                "Japanese",
                "English", 
                "Spanish",
                "Portuguese",
                "French",
                "German",
                "Dutch"] },   
            orderBy: [name_asc]) {
                id: _id
                name
                nativeName
                countries {
                    id: _id
                    name
                    population
                    flag {
                        id: _id
                        emoji
                    }
                }
        }
    }
`;

