import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type RatingProp = {
    score: number;
    total: number;
    style: React.CSSProperties
}

const Rating = (prop: RatingProp) => {
    const { score, total, style } = prop
    const numSolidStars = Math.floor(score)
    const numRegStars = total - Math.ceil(score)
    const hasHalf = (score - numSolidStars) > 0

    const filledStars = [...Array(numSolidStars).keys()].map(i => (<FontAwesomeIcon key={i} icon={['fas', 'star']} style={style} />));
    const halfStar = hasHalf ? [<FontAwesomeIcon key='half' icon={['fas', 'star-half-alt']} style={style} />] : [];
    const unfilledStars = [...Array(numRegStars).keys()].map(i => (<FontAwesomeIcon key={i} icon={['far', 'star']} style={style} />));
    const ratingComponents = [...filledStars, ...halfStar, ...unfilledStars];
    return (
        <div style={{display: 'flex'}}>
            {...ratingComponents}
        </div>
    )
}

export default Rating;
