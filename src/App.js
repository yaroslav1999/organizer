import './App.css';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import LeftMenu from './components/leftMenu';
import MainBody from './components/mainBody';
import CardContext from './data/cardContext';
import cardsData from './data/cards';
import moment from 'moment';
const { Header, Content, Sider } = Layout;




function App() {
  const [scale, setScale] = useState('Month');
  const [cards, setCards] = useState(cardsData);
  const [selectedValue, setSelectedValue] = useState(() => moment());
  const [isAddModalActive, setAddModalActive] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  // const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || cardsData);

  useEffect(() => {

    const items1 = ['Month', 'Day', 'Search'].map((key) => ({
      key,
      label: `${key}`,
      disabled: false,
    }));
    items1[2].disabled=true;
    setMenuItems(items1)
    // console.log(items1);
  }, []);

  const onClick = ({key}) => {
    setScale(key);
    
    // console.log(key, scale);
    // setCurrent('Week');
    // console.log(cards);
  };

  return (
    <CardContext.Provider value={[scale, setScale, cards, setCards, selectedValue, setSelectedValue, isAddModalActive, setAddModalActive]}>
    <Layout>
    <Header className="header">
      <div className="logo1">Organizer</div>
      <Menu theme="dark" mode="horizontal" items={menuItems}  onClick={onClick} defaultSelectedKeys={scale} selectedKeys={scale} />
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
