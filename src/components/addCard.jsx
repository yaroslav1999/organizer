import { Button, DatePicker, Form, Input, Modal, Radio, Select, TimePicker } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import CardContext from '../data/cardContext';
import moment from 'moment';

const AddCard = ({addCard, selectedDate}) => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue, isAddModalActive, setAddModalActive,menuItems, setMenuItems, searchResul, setSearchResul] = useContext(CardContext);
    // const [isModalOpen, setIsModalOpen] = useState(isAddModalActive);
    const formatTime = 'HH:mm';
    const formatDate = 'YYYY-MM-DD';
    const [tagsCollection, setTagsCollection] = useState([]);
    const [cardDataLocal, setCardDataLocal] = useState([]);

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
        let newCard={};
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


        newCard.title="";
        newCard.body="";
        newCard.priority=[];
        newCard.date=moment(selectedDate, formatDate);
        newCard.time=moment("12:00", formatTime);
        newCard.tags=[];
        setCardDataLocal(newCard);

    }, []);

    const saveInfo=(values)=>{
        values.date=values.date.format(formatDate);
        values.time=values.time.format(formatTime);
        // console.log(values);
        setAddModalActive(false);
        addCard(values);
    }

    const onCancel=()=>{
        setAddModalActive(false);
    }

    return (
        <Modal title="Редактирование карточки" open={isAddModalActive} footer={null}>
            <Form  onFinish={saveInfo} initialValues={cardDataLocal} >
                <Form.Item  name="title"
                    rules={[ { required: true, message: "Название карточки обязательно!" } ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="body" rules={[ { required: true, message: "Заполните это поле" } ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="priority" rules={[ { required: true, message: "Выберите приоритет" } ]}>
                    <Radio.Group options={optionsRadio} optionType="button" />
                </Form.Item>

                <Form.Item name="date" rules={[ { required: true, message: "Заполните это поле" } ]}>
                    <DatePicker />
                </Form.Item>
                
                <Form.Item name="time" rules={[ { required: true, message: "Заполните это поле" } ]}>
                    <TimePicker format={formatTime} />
                </Form.Item>
                
                <Form.Item name="tags">
                    <Select mode="tags"style={{width: '100%',}}  placeholder="Tags Mode" options={tagsCollection} />
                </Form.Item>

                <Button type="primary" htmlType="submit">Сохранить</Button>
                <Button onClick={onCancel} type="primary">Выйти</Button>
            </Form>
        </Modal>
    );
}

export default AddCard;
