import { Modal } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import CardContext from '../data/cardContext';
import AddCard from './addCard';
import Card from './Card';
import { v4 as uuidv4 } from "uuid";

const DayCalendar = () => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue, isAddModalActive, setAddModalActive] = useContext(CardContext);
    const [cardsData, setCardsData] = useState([]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    

    useEffect(() => {
        // console.log(value.date(), value.month(), value.year());
        const listCard= cards.filter( obj=> obj.date==selectedValue.format("YYYY-MM-DD"));

        setCardsData(listCard);
        
        console.log(selectedValue.format("YYYY-MM-DD"));

      }, [cards]);
      

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

    const onAddCardClick=()=>{
        setAddModalActive(true);
    }
    
    const addCard=(newCardData)=>{
        setAddModalActive(false);
        const newCards = [...cards, {...newCardData, id: uuidv4()}];
        setCards(newCards);
        // localStorage.setItem("cards", JSON.stringify(newCards));
        // console.log("add card",newCards);
    }
    
    return (
        <>
            <div>
                <h1>{"Список дел на: "+selectedValue.format("YYYY-MM-DD")}</h1>
            </div>
            <div className="cardsWrapper">
                    {cardsData.map((cardData)=>{
                        return <Card cardUpdate={cardUpdate} key={cardData.id} cardData={cardData} />
                    })}
                    {
                        <button className="plusBtn" onClick={onAddCardClick}><img src="plus.png" alt="plus" /></button>
                    }
                
            </div>
            <AddCard isAddModalActive={isAddModalActive} addCard={addCard} selectedDate={selectedValue.format("YYYY-MM-DD")}/>
        </>
        
    );
}

export default DayCalendar;
