import React, { useContext, useEffect, useState } from 'react';
import CardContext from '../data/cardContext';
import Card from './Card';

const DayCalendar = () => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue] = useContext(CardContext);
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        // console.log(value.date(), value.month(), value.year());
        const listCard= cards.filter( obj=> obj.dateDay==selectedValue.date() && obj.dateMonth==selectedValue.month() && obj.dateYear==selectedValue.year());

        setCardsData(listCard);
        // console.log(listCard);
      }, []);
      





    return (
        <div>
            {
                cardsData.map((cardData)=>{
                    return <Card key={cardData.id} cardData={cardData}/>
                })
            }
            
        </div>
    );
}

export default DayCalendar;
