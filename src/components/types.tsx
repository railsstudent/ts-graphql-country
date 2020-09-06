export type Country = {
    id: string;
    name: string;
    population: number;
    flag: {
        emoji: any;
    }
};

export type Language = {
    id: string;
    name: string;
    nativeName: string;
    countries: Country[];
};

type Currency = {
    id: string;
    code: string;
    name: string;
    symbol: string;
}

export type CountryDetails = {
    id: string;
    name: string;
    nativeName: string;
    capital: string;
    currencies: Currency[];
    flag: {
        id: string;
        svgFile: string;
    }
};
