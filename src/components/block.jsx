import React, { useEffect, useState } from 'react';
import AddBlock from './addBlock';
import { dbService, storageService } from '../firebase';

const Block = () => {

    const [fixeds, setFixeds] = useState([
        {name: "bat"},
        {name: "cmd"},
        {name: "com"},
        {name: "cpl"},
        {name: "exe"},
        {name: "scr"},
        {name: "js"},
    ])
    const [items, setItems] = useState([]);

    return (
        <form>
            <div>
                <h2>고정 확장자</h2>
                <div className="fixed">
                    {fixeds.map(fixed => {
                        return (
                            <>
                                <input type="checkBox" key={fixed.id} value={fixed.name} />
                                <label>{fixed.name}</label>
                            </>
                        )
                    })}
                </div>
            </div>
            <div>
            </div>
        </form>
    )
}

export default Block;