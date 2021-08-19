import React from 'react';
import Item from "./Item";

const { useEffect, useState } = require("react");

function ItemList(){
    const [products, setProduct] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) => {
                const data = [
                    {
                        id: "1",
                        name: "Ramen",
                        descripcion: "Japanese soup",
                        price: 20
                    },
                    // {
                    //     id: "2",
                    //     name: "Bento",
                    //     descripcion: "Japanese box lunch",
                    //     price: 15
                    // }
                    // Usado para testear
                ]
                setTimeout(() => resolve(data),2000)

              }).then((dataResolve) => {

                  console.log("data Resolve", dataResolve)
                  setProduct(dataResolve)
              
              }).catch((error) => {
                    console.log("Error", error);
              })
    }, [])

    return (
        <div>
            {products.map((itemProducto) => 
            <>
            <Item valor={itemProducto.id} />
            <Item valor={itemProducto.name} />
            <Item valor={itemProducto.descripcion} />
            <Item valor={itemProducto.price} />
            </>
            )}
        </div>
    )
}
 export default ItemList