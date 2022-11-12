import { Button, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { Checkbox, Divider } from 'antd';
import Search from 'antd/lib/input/Search';
import CardContext from '../data/cardContext';
const CheckboxGroup = Checkbox.Group;
const options = [
    {
      label: 'Заголовок',
      value: 'title',
    },
    {
      label: 'Описание',
      value: 'body',
    },
    {
      label: 'Тэг',
      value: 'tags',
    },
  ];

const LeftMenu = () => {
    const [scale, setScale, cards, setCards, selectedValue, setSelectedValue, isAddModalActive, setAddModalActive,menuItems, setMenuItems, searchResul, setSearchResul] = useContext(CardContext);
    const [checkedList, setCheckedList] = useState([]);
    

    const onChange = (list) => {
        setCheckedList(list);
        console.log(list);
    };

    const onSearch=(value)=>{
        let rez=[], rez1=[], rez2=[], rez3=[];
        if (checkedList.length===0){
            const arr=[...menuItems];
            arr[2].disabled=true;
            setMenuItems(arr);
            return;
        }
        console.log(value);
        checkedList.map(item=>{
            switch (item){
                case 'title':
                    rez1=cards.filter(Carditem=>Carditem.title.includes(value));
                    break;
                case 'body':
                    rez2=cards.filter(Carditem=>Carditem.body.includes(value));
                    break;
                case 'tags':
                    rez3=cards.filter(Carditem=>Carditem.tags.reduce((sum, cur)=>{return sum+" "+cur},[]).includes(value) );
                    break;
                default:
                    break;
            }
        })

        let result = [];
        rez=[...rez1, ...rez2, ...rez3];
        for (let str of rez) {
            if (!result.includes(str)) { result.push(str)}
        }

        if (result.length===0){
            const arr=[...menuItems];
            arr[2].disabled=true;
            setMenuItems(arr);
            return;
        }

        const arr=[...menuItems];
        arr[2].disabled=false;
        setMenuItems(arr);

        setSearchResul(result);
        console.log(result);

    }

    return (
        <div className="searchTab">
            <Space direction="vertical">
                <p>Поиск:</p>
                <Divider />
                <CheckboxGroup options={options} value={checkedList} onChange={onChange} />
                <Divider />
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Space>

        </div>
    );
}

export default LeftMenu;
