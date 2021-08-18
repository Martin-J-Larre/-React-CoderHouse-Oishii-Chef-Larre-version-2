import React from 'react';

const ItemsListContainer = (props) => {
    
    return (
        <div className="itemsListContainer">
           <h1 className="titulos">{props.titulo}</h1>
        </div>   
    );
}

export default ItemsListContainer