import React from 'react';
import { CountryDetails, Currency, Timezone } from './types';

interface CountryProps {
    country: CountryDetails;
}

const currencyComp = (currencies: Currency[]) => {
    // console.log(currencies);
    return currencies.map((currency) => {
        const { id, code, symbol, name } = currency;
        return (
            <li key={id} className="text-gray-600 text-base">
                {name} / {code} ({symbol})
            </li>
        );
    });
};

const timezoneList = (timezones: Timezone[]) => {
    return timezones.map((timezone) => {
        const { id, name } = timezone;
        return (
            <li key={id} className="text-gray-600 text-base">
                {name}
            </li>
        );
    });
};

const CountryCard = ({ country }: CountryProps) => {
    // console.log(country);
    const {
        id,
        name,
        nativeName,
        capital,
        population,
        currencies,
        flag: { id: flagId, svgFile },
        timezones,
    } = country;

    const desc = `Flag of ${name}`;
    return (
        <div key={id} className="p-2 my-4 mx-3 flex-auto max-w-card w-20-rem shadow-lg rounded-lg">
            <div className="mb-2">
                <img
                    className="my-0 mx-auto"
                    key={flagId}
                    alt={desc}
                    src={svgFile}
                    width="180"
                    height="auto"
                    title={desc}
                />
            </div>
            <div className="text-center tracking-tighter">
                <p className="text-base">
                    <span className="italic text-gray-800 mr-1">Name:</span>{' '}
                    <span className="text-gray-600">{name}</span>
                </p>
                <p className="text-base">
                    <span className="italic text-gray-800 mr-1">
                        Native Name:
                    </span>
                    <span className="text-gray-600">{nativeName}</span>
                </p>
                <p className="text-base">
                    <span className="italic text-gray-800 mr-1">Capital:</span>
                    <span className="text-gray-600">{capital}</span>
                </p>
                <p className="text-gray-600 text-base">
                    <span className="italic text-gray-800 mr-1">
                        Population:
                    </span>
                    <span className="text-gray-600">
                        {population.toLocaleString()}
                    </span>
                </p>
                <p className="italic text-gray-800 text-base">Currencies:</p>
                <ul>{currencyComp(currencies)}</ul>
                <p className="italic text-gray-800 text-base">Timezones:</p>
                <ul>{timezoneList(timezones)}</ul>
            </div>
        </div>
    );
};

export default CountryCard;


// <!-- component -->
// <div class="mx-auto px-4 py-8 max-w-xl my-20">
//         <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
//             <div class="md:flex-shrink-0">
//                 <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" class="w-full h-64 rounded-lg rounded-b-none">
//             </div>
//             <div class="px-4 py-2 mt-2">
//                 <h2 class="font-bold text-2xl text-gray-800 tracking-normal">My Amaizing Journey to the Mountains.</h2>
//                     <p class="text-sm text-gray-700 px-2 mr-1">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
//                     </p>
//                     <div class="flex items-center justify-between mt-2 mx-6">
//                         <a href="#" class="text-blue-500 text-xs -ml-3 ">Show More</a>
//                         <a href="#" class="flex text-gray-700">
//                             <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-blue-500" stroke="currentColor">
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
//                             </svg>
//                             5
//                         </a>
//                     </div>
//                 <div class="author flex items-center -ml-3 my-3">
//                     <div class="user-logo">
//                         <img class="w-12 h-12 object-cover rounded-full mx-4  shadow" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar">
//                     </div>
//                     <h2 class="text-sm tracking-tighter text-gray-900">
//                         <a href="#">By Mohammed Ibrahim</a> <span class="text-gray-600">21 SEP 2015.</span>
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     </div>