const ItemDetail = (props) => {
    
    return (
        <div className="Item-container">
             <h2>Detalle de los productos</h2>
             <h5>Id:{props.id}</h5>
             <h5> $ {props.precio}</h5>
             <h5>{props.titulo}</h5>
        </div>
    );
}
export default ItemDetail

