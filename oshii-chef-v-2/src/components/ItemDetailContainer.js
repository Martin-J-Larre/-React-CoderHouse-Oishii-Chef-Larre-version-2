import React, { useState, useEffect, Fragment} from 'react';
// import products from './products.json'

function ItemDetailContainer(){
    const [data, setData] = useState([]);

    useEffect( () => {
        obtenerData();
    }, []);

    const obtenerData = async () => {
        await fetch("products.json")
        .then(response => response.json())
        .then(receivedData => setData(receivedData));
}
console.log(data);
    return (
        
        <div>
            {data.map(cadaProducto => (
                <Fragment>
                <div>{cadaProducto.precio},</div>
                <div>{cadaProducto.id}</div>
                <div>{cadaProducto.titulo}</div>
                <div>{cadaProducto.imagenUrl}</div>
                </Fragment>
            ))}
            
        </div>
    );
    
}

export default ItemDetailContainer
