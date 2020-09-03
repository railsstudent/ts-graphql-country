import React from 'react';
import { Language } from './types';

type Prop = {
    language: Language
};

const LanguageCard = ({ language }: Prop) => {
    return (
        <div>
            <div>
                <label>
                    Name:
                    <span>{ language.name }</span>
                </label>
            </div>
            <div>
                <label>
                    Native Name:
                    <span>{ language.nativeName }</span>
                </label>
            </div>
        </div>
    );
}

export default LanguageCard;
