import { makeVar } from '@apollo/client';
export const acceptableLangs = [
    'Chinese',
    'English',
    'Spanish',
    'Portuguese',
    'French',
    'German',
    'Dutch',
    'Italian',
    'Russian',
    'Arabic',
];

export enum FluencyLevel {
    DO_NOT_KNOW = 'I do not speak the language',
    FLUENCY = 'I speak fluently',
    LEARNING = 'I am learning the language',
    NATIVE = 'I speak natively',
}

type Fluency = {
    level: FluencyLevel;
    score: number;
    total: number;
};

const languageFluency: Record<string, Fluency> = {
    Chinese: {
        level: FluencyLevel.NATIVE,
        score: 6,
        total: 6,
    },
    English: {
        level: FluencyLevel.FLUENCY,
        score: 4,
        total: 6,
    },
    Spanish: {
        level: FluencyLevel.LEARNING,
        score: 1,
        total: 6,
    },
    Portuguese: {
        level: FluencyLevel.LEARNING,
        score: 0.5,
        total: 6,
    },
    French: {
        level: FluencyLevel.DO_NOT_KNOW,
        score: 0,
        total: 6,
    },
    German: {
        level: FluencyLevel.DO_NOT_KNOW,
        score: 0,
        total: 6,
    },
    Dutch: {
        level: FluencyLevel.DO_NOT_KNOW,
        score: 0,
        total: 6,
    },
    Italian: {
        level: FluencyLevel.DO_NOT_KNOW,
        score: 0,
        total: 6,
    },
    Arabic: {
        level: FluencyLevel.DO_NOT_KNOW,
        score: 0,
        total: 6,
    },
    Russian: {
        level: FluencyLevel.DO_NOT_KNOW,
        score: 0,
        total: 6,
    },
};

export const fleuncyVar = makeVar(languageFluency);
