import { makeVar } from "@apollo/client";
export const acceptableLangs = [
    'Korean',
    'Japanese',
    'English', 
    'Spanish',
    'Portuguese',
    'French',
    'German',
    'Dutch'
];

export enum FluencyLevel {
    NOT_KNOW = 'Does not speak the language',
    FLUENCY = 'I speak fluently',
    LEARNING = 'I am learning the language'
}

const languageFluency = {
    Korean: FluencyLevel.NOT_KNOW,
    Japanese: FluencyLevel.NOT_KNOW,
    English: FluencyLevel.FLUENCY, 
    Spanish: FluencyLevel.LEARNING,
    Portuguese: FluencyLevel.LEARNING,
    French: FluencyLevel.NOT_KNOW,
    German: FluencyLevel.NOT_KNOW,
    Dutch: FluencyLevel.NOT_KNOW
}

export const fleuncyVar = makeVar(languageFluency);
