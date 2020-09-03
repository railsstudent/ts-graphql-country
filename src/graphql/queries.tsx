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
                _id
                name
                nativeName
                countries {
                    _id
                    name
                    flag {
                        emoji
                        svgFile
                    }
                }
        }
    }
`;

