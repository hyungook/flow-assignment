import { useEffect, useState } from 'react';
import './app.css';
// import express from 'express';
// import bodyParser from 'body-parser';
// import axios from 'axios';
// import Block from './components/block';
import Item from './components/item';
import ItemAddForm from './components/itemAddForm';
import { dbService, storageService } from './firebase';

function App() {

  const [items, setItems] = useState([]);

    useEffect(() => {
        dbService.collection("tweets").onSnapshot(snapshot => {
        const itemArray = snapshot.docs.map(doc => ({
            id: doc.id, ...doc.data(),
        }));
        setItems(itemArray)
        })
    }, []);

  return (
    <div>
      <header>
        <h1>파일 확장자 차단</h1>
        <p>파일 확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한</p>
      </header>
    {/* <Block /> */}

    <div className="container">
        <ItemAddForm items={items} />
        <div>
            {items.map(item => (
                <Item itemObj={item} />
            ))}
        </div>
    </div>

    </div>
  );
}

export default App;
