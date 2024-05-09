// youre so dumb, use this import React, { useState, useEffect } from 'react';
// import { Progress } from '@nextui-org/react';

// const getSumOutOfFive = (values) => {
//     const sum = values.reduce((acc, val) => acc + val, 0);
//     return Math.min(Math.round((sum / (values.length * 100)) * 5), 5);
// };

// const countStarReviews = (values, star) => {
//     return values.filter(value => Math.round(value / 20) === star).length;
// };

// const convertToStarsInWords = (value) => {
//     switch (Math.round(value / 20)) {
//         case 5:
//             return '5 star';
//         case 4:
//             return '4 star';
//         case 3:
//             return '3 star';
//         case 2:
//             return '2 star';
//         case 1:
//             return '1 star';
//         default:
//             return '';
//     }
// };

// const ProgressComponent = ({ values, onSumChange }) => {
//     const [sumOutOfFive, setSumOutOfFive] = useState(0);
//     const [numOfStarReviews, setNumOfStarReviews] = useState(Array(5).fill(0));

//     useEffect(() => {
//         const sum = getSumOutOfFive(values);
//         setSumOutOfFive(sum);
//         onSumChange(sum);

//         const numStarReviews = Array(5).fill(0);
//         for (let i = 1; i <= 5; i++) {
//             numStarReviews[i - 1] = countStarReviews(values, i);
//         }
//         setNumOfStarReviews(numStarReviews);
//     }, [values, onSumChange]);

//     const sortedValues = [...values].sort((a, b) => b - a);

//     return (
//         <div className="flex flex-col w-full max-w-md">
//             {sortedValues.map((value, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                     <span className='w-[12%]'>{convertToStarsInWords(value)}</span>
//                     <Progress color="default" aria-label="Loading..." value={value} />
//                     <span>{numOfStarReviews[Math.round(value / 20) - 1]}</span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProgressComponent;, 









import React, { useState, useEffect } from 'react';
import { Progress } from '@nextui-org/react';


const getSumOutOfFive = (values) => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return Math.min(Number((sum / (values.length * 5) * 5).toFixed(1)), 5);
};

const countStarReviews = (values, star) => {
    const filteredValues = values.filter(value => {
        const roundedValue = Math.round(value / 20);
        console.log(`Value: ${value}, Rounded value: ${roundedValue}`);
        return roundedValue === star;
    });
    console.log(`Filtered values for ${star}-star rating:`, filteredValues);
    return filteredValues.length;
};


// const countStarReviews = (values, star) => {
//     console.log("values :", values );
//     const filteredValues = values.filter(value => {
//         const roundedValue = Math.round(value / 20);
//         console.log(`Value: ${value}, Rounded value: ${roundedValue}`);
//         return roundedValue === star;
//     });
//     console.log(`Filtered values for ${star}-star rating:`, filteredValues);
//     return filteredValues.length;
// };


const convertToStarsInWords = (star) => {
    switch (star) {
        case 5:
            return '5 star';
        case 4:
            return '4 star';
        case 3:
            return '3 star';
        case 2:
            return '2 star';
        case 1:
            return '1 star';
        default:
            return '';
    }
};

const ProgressComponent = ({ onSumChange }) => {
    const [sumOutOfFive, setSumOutOfFive] = useState(0);
    const [numOfStarReviews, setNumOfStarReviews] = useState(Array(5).fill(0));

    useEffect(() => {

        const values = [1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 5, 5, 5, 4, 4, 4];

        // Calculate sum out of five
        const sum = getSumOutOfFive(values);
        setSumOutOfFive(sum);
        onSumChange(sum);

        // Count the number of reviews for each star rating
        const numStarReviews = Array(5).fill(0);
        for (let i = 1; i <= 5; i++) {
            numStarReviews[i - 1] = countStarReviews(values, i);
        }
        setNumOfStarReviews(numStarReviews);
    }, [onSumChange]);





    const starsToShow = [5, 4, 3, 2, 1];

    return (
        <div className="flex flex-col w-full max-w-md">
            {starsToShow.map((star, index) => (
                <div key={index} className="flex items-center gap-2">
                    <span className='w-[12%]'>{convertToStarsInWords(star)}</span>
                    <Progress color="default" aria-label="Loading..." value={numOfStarReviews[5 - star]} />
                    <span>{numOfStarReviews[star - 1]}</span>
                </div>
            ))}
        </div>
    );
};

export default ProgressComponent;
