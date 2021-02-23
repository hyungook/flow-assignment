import { useEffect, useState } from 'react';
// import './app.css';
import Block from './components/block';

function App() {

  return (
    <div>
      <header>
        <h1>파일 확장자 차단</h1>
        <p>파일 확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한</p>
      </header>
    <Block />

    </div>
  );
}

export default App;
