import React, { useContext, useEffect, useState } from 'react';
import CardContext from '../data/cardContext';
import Card from './Card';

const SearchResult = () => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue, isAddModalActive, setAddModalActive,menuItems, setMenuItems, searchResul, setSearchResul] = useContext(CardContext);
    // const [cardsData, setCardsData] = useState([...searchResul]);
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        // console.log(cards);
        //console.log(moment().format('dddd'));

        const arr=[...searchResul];
        setCardsData(arr);
        // console.log("test");
        // console.log(searchResul);
        // console.log(cardsData);
        // setCardsData(...searchResul);

      }, [searchResul]);

    const cardUpdate=(data)=>{
        console.log(data);
        const selectedIndex = cards.reduce((acc, curr, i) => cards[acc].id == data.id ? acc : i, 0);
        // console.log(selectedIndex);
        const newCards = [...cards];
        newCards[selectedIndex].title=data.title;
        newCards[selectedIndex].body=data.body;
        newCards[selectedIndex].date=data.date;
        newCards[selectedIndex].time=data.time;
        newCards[selectedIndex].priority=data.priority;
        newCards[selectedIndex].tags=data.tags;

        //localStorage.setItem("cards", JSON.stringify(newCards));
        setCards(newCards);
    }

    return (
        <>
            <div>
                <h1>{"Результаты поиска"}</h1>
            </div>
            <div className="cardsWrapper">
                {cardsData.map((cardData)=>{
                    return <Card cardUpdate={cardUpdate} key={cardData.id} cardData={cardData} />
                })}
            </div>
        </>
    );
}

export default SearchResult;
