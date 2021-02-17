import React, { useState } from 'react';
import { dbService, storageService } from '../firebase';

const ItemAddForm = ({itemObj}) => {

    const [item, setItem] = useState("");
    const [fixeds, setFixeds] = useState([
        {name: "bat"},
        {name: "cmd"},
        {name: "com"},
        {name: "cpl"},
        {name: "exe"},
        {name: "scr"},
        {name: "js"},
    ])
    
    const onSubmit = async (event) => {
        if (item === "") {
            return;
        }
        event.preventDefault();
        const itemObjet = {
            text:item,
            data: Date.now(),
        };
        console.log(itemObjet)
        await dbService.collection(`items/${item}`).add(itemObjet);
        setItem("");
    }

    const onChange = (event) => {
        event.preventDefault()
        const {target:{value}} = event;
        setItem(value);
    }
        return (
            <div>
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

            <form onSubmit={onSubmit} className="factoryForm">
            <h2>커스텀 확장자</h2>
                <div className="factoryInput__container">
                    <input
                    className="factoryInput__input"
                    value={item}
                    onChange={onChange}
                    type="text"
                    placeholder="파일 확장자 차단"
                    maxLength={20}
                    />
                    <input type="submit" value="+ 추가"  onClick={onSubmit} />
                </div>
            </form>
        </div>
        )
    };

export default ItemAddForm;