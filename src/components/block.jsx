import React, { useState } from 'react';

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

    console.log(fixeds);

    const [blocks, setBlocks] = useState([]);

    const onChange = (event) => {
        const {target:{value}} = event;
        setBlocks(value);
    }
    const onClick = (event) => {
        event.preventDefault();
    }

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
                <h2>커스텀 확장자</h2>
                <div>
                    <input
                        value={blocks}
                        onChange={onChange}
                        type="text"
                        placeholder=""
                        maxLength={10}
                    />
                    <input type="submit" value="+추가" onClick={onClick} />
                </div>
                <div>
                    <p>/200</p>
                    {/* map */}
                </div>
            </div>
        </form>
    )
}

export default Block;