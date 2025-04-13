import React from 'react';
import { picOfDay } from "../types/picOfDay";

interface Props {
    pic: picOfDay;
    addToFavourite: (item: picOfDay) => void;
};

const PicOfTheDayCard = ({pic, addToFavourite}: Props) => {
    return (
          <div className="card">
            <h1>{pic.title}</h1>
            <p>{pic.date}</p>
            {pic.media_type === 'image' ? (
                <img src={pic.url} alt={pic.title}/>
            ): (
                <iframe title={pic.title} src={pic.url} style={{width:"100%", height:"400"}}/>
            )}
            <p>{pic.explanation}</p>
            <button onClick={()=> addToFavourite(pic)}>Add to Favourites</button>
        </div>
    );
};

export default PicOfTheDayCard;