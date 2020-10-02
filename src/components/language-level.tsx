import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CountryDetails, CountryLanguage } from './types';
import Rating from './rating';

interface LanguageLevelProps {
    languages?: CountryLanguage[];
}

const getIcon = (
    score: number,
    total: number,
): { icon: IconProp; css: React.CSSProperties } => {
    const percentage = (score * 100) / total;
    const icon: IconProp = percentage > 0 ? ['fas', 'check'] : ['fas', 'times'];
    let color = '';

    if (percentage >= 60) {
        color = 'green';
    } else if (percentage > 0) {
        color = 'rgb(250, 180, 0)';
    } else {
        color = 'red';
    }

    return {
        icon,
        css: { color }
    };
};

const LanguageLevel = (props: LanguageLevelProps) => {
    const { languages } = props;
    const defaultLangauge: CountryLanguage = {
        id: '',
        name: '',
        nativeName: '',
        countries: [] as CountryDetails[],
        fluency: { level: '', score: 0, total: 0 },
    };
    const [language = defaultLangauge] = languages || [];
    const descName = `${language.name}/${language.nativeName}`;
    const { countries, fluency: { level, score, total } } = language;
    const { icon, css } = getIcon(score, total);

    return (
        <>
            <h2 className="text-xl italic text-blue-400">
                {countries.length} countries/regions speak {descName} 
            </h2>
            <div className="flex items-center text-lg text-gray-600">
                <span className="mr-2">Fluency: {level}</span>
                <FontAwesomeIcon icon={icon} style={css} />
            </div>
            <div className="flex items-center text-lg mb-2 text-gray-600">
                <span className="mr-2">Personal Rating:</span>
                <Rating
                    score={score}
                    total={total}
                    style={{ color: 'rgb(250, 180, 0)' }}
                />
            </div>
        </>
    );
}

export default LanguageLevel;
