import React, { useState } from 'react';
import { dbService, storageService } from '../firebase';

const AddBlock = () => {

    const [blocks, setBlocks] = useState([]);
    
    const onCustom =()=>{
        fetch("http://localhost:4000/custom",{
            method:"get",
            heades:{
                "content-type" : "application/json",
            },
            body: JSON.stringify()
        })
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json)
        })
    }

    const onChange = (event) => {
        const {target:{value}} = event;
        setBlocks(value);
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        if (blocks === "") {
            return;
        }
        
        console.log(blocks)
        setBlocks("");
    }

    return(
        <div>
            <h2>커스텀 확장자</h2>
            <form>
                <input
                    value={blocks}
                    onChange={onChange}
                    type="text"
                    placeholder=""
                    maxLength={10}
                />
                <input type="submit" value="+추가" onClick={onSubmit} />
            </form>
            <div>
                {/* <p>{this.onCustom}</p> */}
                <p>{onCustom}</p>
            </div>
        </div>
    )
};



export default AddBlock;