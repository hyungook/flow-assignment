import React from 'react';
import { dbService, storageService } from '../firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Item = ({item}) => {

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        if(ok) {
            await dbService.doc(`items/${item}`).delete();
        }
    };

    return (
        <div>
          <h4>{item.text}</h4>
              <div>
                <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
                </span>
            </div>
    </div>
  );
};

export default Item;
