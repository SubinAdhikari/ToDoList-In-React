import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
const App = () =>{
const [itemState,setItemState] = useState("");
const [itemStateArray,setItemStateArray] = useState([]);

const addItem = (event) =>{
  setItemState(event.target.value);
};
const addInArray = () =>{
  setItemStateArray( (prevValue) =>{
    return [...prevValue,itemState];
  });
  setItemState('');
};

const deleteItemFromArray = (id) =>{
// console.log('Deleted');
setItemStateArray ( (prevValue) =>{
return prevValue.filter((arrayElement,index)=>{
  return index !== id ;
});
});

};

  return(
    <>
    <div className="backgroundDiv">
        <div className="toDoDiv">
          <br/>
            <div className="heading">
            <h1>ToDo List</h1>
            </div>
            <br/>
            <div className="inputFieldDiv">
                  <div className="inuptField">
                  <input type="text" placeholder="Add a Item" value={itemState} onChange={addItem}/>
                  </div>
                  <div className="addButton">
                  <button onClick={addInArray}><span style={{fontFamily:'Oswald',fontSize:'30px',color:'white'}}>+</span></button>
                  </div>  
            </div>
            <br/>
            <div className="toDoListsItem">
                    <ul>
                        {/* <li>{itemStateArray}</li> */}

                        {itemStateArray.map( (Lists,index) =>{
                            return(
                                // <li>{Lists}</li>
                                <ItemList id={index} key={index} value={Lists} onSelect={deleteItemFromArray}/>
                            );
                        })}

                    </ul>
                  </div>
        </div>
    </div>
</>
  );
}
export default App;