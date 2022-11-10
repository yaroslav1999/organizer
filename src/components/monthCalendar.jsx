import { Badge, Calendar } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import CardContext from '../data/cardContext';





const MonthCalendar = () => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue] = useContext(CardContext);
    


    const onPanelChange=(newValue)=>{
        console.log("onPanelChange");
        setSelectedValue(newValue);

    }
    const onSelect=(value)=>{
        // console.log("onSelect");
        setSelectedValue(value);
        setScale('Day');
       
        // console.log(value.format('Y'));
        // console.log(moment('2017-01-25'));
    }
 
    useEffect(() => {
        // console.log(selectedValue);
        //console.log(moment().format('dddd'));
    }, []);



   const getListData = (value) => {
    let listData=[];
    // console.log(value.date(), value.month(), value.year());
    listData= cards.filter( obj=> obj.dateDay==value.date() && obj.dateMonth==value.month() && obj.dateYear==value.year()).map(
        (item)=>{
            return {'type': item.priority,
                    'content':item.title}
        }
    );
   
    return listData;
  };



  const dateCellRender = (value) => {
    const listData = getListData(value);  // события для конкретного дня value=date of the month
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };



  return <Calendar dateCellRender={dateCellRender}  onSelect={onSelect} onPanelChange={onPanelChange}/>;
};
export default MonthCalendar;
