import React from 'react';

const ItemList = (props) =>{
    return(
    <>
    <li> <i className="fa fa-times-circle" onClick={() =>{
          props.onSelect(props.id);
          }}/>
     {props.value}
     </li>
    </>
    );
}
export default ItemList;