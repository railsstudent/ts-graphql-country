export type Country = {
    id: string;
    name: string;
    population: number;
    flag: {
        emoji: any;
    };
};

export type Language = {
    id: string;
    name: string;
    nativeName: string;
    countries: Country[];
};

export type Currency = {
    id: string;
    code: string;
    name: string;
    symbol: string;
};

export type Timezone = {
    id: string;
    name: string;
};

export type CountryDetails = {
    id: string;
    name: string;
    nativeName: string;
    capital: string;
    population: number;
    currencies: Currency[];
    flag: {
        id: string;
        svgFile: string;
    };
    timezones: Timezone[];
};

export type LanguageFluency = {
    level: string;
    score: number;
    total: number;
};

export type CountryLanguage = {
    id: string;
    name: string;
    nativeName: string;
    countries: CountryDetails[];
    fluency: LanguageFluency;
};