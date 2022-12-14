import { Badge, Button, DatePicker, Divider, Form, Input, Modal, Radio, Select, Tag, TimePicker } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import CardContext from '../data/cardContext';

const Card = ({cardData, cardUpdate}) => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue, isAddModalActive, setAddModalActive,menuItems, setMenuItems, searchResul, setSearchResul] = useContext(CardContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardDataLocal, setCardDataLocal] = useState(cardData);
    const [tagsCollection, setTagsCollection] = useState([]);
    // const [radio, setRadio] = useState('');
    const formatTime = 'HH:mm';
    const formatDate = 'YYYY-MM-DD';

    const optionsRadio = [
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Orange',
          value: 'orange',
        },
        {
          label: 'Green',
          value: 'green',
        },
      ];

    useEffect(() => {
        
        let arr=[];
        let result = [];
        let arr2=[];

        cards.forEach(item=>{
            arr=[...arr, ...item.tags||[]];
        });
        for (let str of arr) {
            if (!result.includes(str)) {
              result.push(str);
            }
        }

        result.forEach(item=>{
            arr2=[...arr2, {'label':item, 'value':item}];
        });
        // console.log(arr2);
        setTagsCollection(arr2);

        // console.log(cardDataLocal);

    }, [cards]);

    const onClick=()=>{
        let newCard={};
        newCard.id=cardDataLocal.id;
        newCard.title=cardDataLocal.title;
        newCard.body=cardDataLocal.body;
        newCard.priority=cardDataLocal.priority;
        newCard.tags=cardDataLocal.tags;
        newCard.date=moment(cardDataLocal.date, formatDate);
        newCard.time=moment(cardDataLocal.time, formatTime);
        setCardDataLocal(newCard);

        setIsModalOpen(true);
    }
    
    const saveInfo=(values)=>{
        if(scale==='Search'){
            const arr=[...menuItems];
            arr[2].disabled=true;
            setMenuItems(arr);
            setScale('Month');
        }
        

        setIsModalOpen(false);
        setCardDataLocal(cardData);
        values.id=cardDataLocal.id;
        values.date=values.date.format(formatDate);
        values.time=values.time.format(formatTime);
        console.log(values);
        cardUpdate(values);
        // console.log(cardData);
        // updateCard({...values, id:card.id});
    }

    const onDelete=()=>{
        if(scale==='Search'){
            const arr=[...menuItems];
            arr[2].disabled=true;
            setMenuItems(arr);
            setScale('Month');
        }

        console.log("delete");
        const newFilms = cards.filter((card) => card.id !== cardDataLocal.id);
        setCards(newFilms);
        setIsModalOpen(false);
    }
    const onCancel=()=>{
        console.log("cancel");
        setIsModalOpen(false);
    }
    
    

    return (
        <div className="badgeOver">
            <Badge.Ribbon text="" color={cardData.priority} >
                <div className="card" onClick={onClick}>
                    <div className="cardTop">
                        <p>{cardData.title}</p>
                    </div>
                    <hr/>
                    <div className="cardBody">
                        <p>{cardData.body}</p>
                        <hr/>
                        <p>{"????????: "+cardData.date}</p>
                        <p>{"??????????: "+cardData.time}</p>
                    </div>
                    <hr/>
                    <div className="cardFooter">
                        {cardData.tags?.map(item=>{
                            return <Tag key={item} color="processing">{item}</Tag>
                        })}
                    </div>
                    
                </div>
            </Badge.Ribbon>
            <Modal title="???????????????????????????? ????????????????" open={isModalOpen} footer={null}>
            <Form  onFinish={saveInfo} initialValues={cardDataLocal} >
                <Form.Item  name="title"
                    rules={[ { required: true, message: "???????????????? ???????????????? ??????????????????????!" }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="body" rules={[ { required: true, message: "?????????????????? ?????? ????????" } ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="priority" rules={[ { required: true, message: "???????????????? ??????????????????" } ]}>
                    <Radio.Group options={optionsRadio} optionType="button" />
                </Form.Item>

                <Form.Item name="date" rules={[ { required: true, message: "?????????????????? ?????? ????????" } ]} >
                    <DatePicker />
                </Form.Item>
                
                <Form.Item name="time" rules={[ { required: true, message: "?????????????????? ?????? ????????" } ]}>
                    <TimePicker format={formatTime} />
                </Form.Item>
                {/* <TimePicker defaultValue={moment('12:08', format)} format={format} /> */}
                <Form.Item name="tags">
                    <Select mode="tags"style={{width: '100%',}} placeholder="Tags Mode" options={tagsCollection} />
                </Form.Item>
                
                <Divider />
                <div className="modalFooter">
                    <Button type="primary" htmlType="submit">??????????????????</Button>
                    <Button onClick={onDelete} type="primary">??????????????</Button>
                    <Button onClick={onCancel} type="primary">??????????</Button>
                </div>
                
            </Form>
            </Modal>
        </div>
    );
}

export default Card;
