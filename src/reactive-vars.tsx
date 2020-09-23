import { makeVar } from '@apollo/client';
export const acceptableLangs = [
    'Korean',
    'Japanese',
    'English',
    'Spanish',
    'Portuguese',
    'French',
    'German',
    'Dutch',
];

export enum FluencyLevel {
    DO_NOT_KNOW = 'Does not speak the language',
    FLUENCY = 'I speak fluently',
    LEARNING = 'I am learning the language',
}

type Fluency = {
    level: FluencyLevel;
    score: number;
    total: number;
};

const languageFluency: Record<string, Fluency> = {
    Korean: FluencyLevel.DO_NOT_KNOW,
    Japanese: FluencyLevel.DO_NOT_KNOW,
    English: FluencyLevel.FLUENCY,
    Spanish: FluencyLevel.LEARNING,
    Portuguese: FluencyLevel.LEARNING,
    French: FluencyLevel.DO_NOT_KNOW,
    German: FluencyLevel.DO_NOT_KNOW,
    Dutch: FluencyLevel.DO_NOT_KNOW,
};

export const fleuncyVar = makeVar(languageFluency);
