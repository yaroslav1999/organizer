import React, { useEffect } from 'react';

const Card = ({cardData}) => {

    useEffect(() => {

        console.log(cardData.id);
      }, []);


    return (
        <div>
            
        </div>
    );
}

export default Card;
