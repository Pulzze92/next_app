import { RatingProps } from "./Rating.props"
import styles from './Rating.module.css';
import cn from 'classNames';
import { useEffect, useState } from "react";
import StarIcon from './rating.svg';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArr.map((r: JSX.Element, i: number) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <StarIcon 
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating
                })}
                />
            );
        });
        setRatingArr(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};