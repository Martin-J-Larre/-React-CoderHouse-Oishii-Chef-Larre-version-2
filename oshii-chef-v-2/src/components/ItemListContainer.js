import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList'

const ItemsListContainer = (props) => {
    
    return (
        <div className="itemsListContainer">
           <h1 className="titulos">{props.titulo}</h1>
           <ItemCount valorInicial={0} stock={10}/>
           <ItemList />
        </div>   
    );
}

export default ItemsListContainer