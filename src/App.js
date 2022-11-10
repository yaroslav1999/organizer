import './App.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import LeftMenu from './components/leftMenu';
import MainBody from './components/mainBody';
import CardContext from './data/cardContext';
import cardsData from './data/cards';
import moment from 'moment';
const { Header, Content, Sider } = Layout;


const items1 = ['Month', 'Day'].map((key) => ({
  key,
  label: `${key}`,
}));

function App() {
  const [scale, setScale] = useState('Month');
  const [cards, setCards] = useState(cardsData);
  const [selectedValue, setSelectedValue] = useState(() => moment());
  // const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || cardsData);

  const onClick = ({key}) => {
    setScale(key);
    // console.log(key, scale);
    // setCurrent('Week');
    // console.log(cards);
  };

  return (
    <CardContext.Provider value={[scale, setScale, cards, setCards, selectedValue, setSelectedValue]}>
    <Layout>
    <Header className="header">
      <div className="logo1">Organizer</div>
      <Menu theme="dark" mode="horizontal" items={items1}  onClick={onClick} defaultSelectedKeys={scale} selectedKeys={scale} />
    </Header>
    <Layout style={{padding: '5px'}}>
      <Sider width={200} className="site-layout-background sider-my-class">
        <LeftMenu/>
      </Sider>
      <Layout style={{padding: '0px 5px'}}>
        <Content className="site-layout-background" style={{padding: 2, margin: 0, minHeight: 280, }}>
          <MainBody/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </CardContext.Provider>
  );
}

export default App;
