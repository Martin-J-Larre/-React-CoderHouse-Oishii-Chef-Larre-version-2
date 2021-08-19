import React from 'react';

const Item = (props) => {
    
    return (
       <>
         <div className="Item-container">
             <h5>{props.valor}</h5>
         </div>
       </>
    );
}

export default Item