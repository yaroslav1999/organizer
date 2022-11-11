import { Button } from 'antd';
import React, { useContext, useEffect } from 'react';
import CardContext from '../data/cardContext';
import MonthCalendar from './monthCalendar';
import moment from 'moment';
import DayCalendar from './dayCalendar';
import SearchResult from './searchResult';

const MainBody = () => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue] = useContext(CardContext);

    useEffect(() => {
        // console.log(cards);
        //console.log(moment().format('dddd'));


      }, []);

    return (
        <div className="monthCalendar">
            {scale==='Day'&&
            (
                <>
                    <DayCalendar/>
                </>
            )}
            {scale==='Month'&&
            (
                <>
                    <MonthCalendar/>
                </>
            )}
            {scale==='Search'&&
            (
                <>
                    <SearchResult/>
                </>
            )}

        </div>
    );
}

export default MainBody;
