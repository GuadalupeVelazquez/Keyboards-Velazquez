
import {Link} from 'react-router-dom'
import React, { useContext } from 'react'
import { useState } from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from '../../context/cartContext';


const styles = {
  style : {
    textAlign: 'center',
    fontFamily : 'Helvetica',
    fontWeight: 'bold',
    color:' #222121d1'
   
  }

  
}

function ItemDetail(item) {

  const [cantidad,setCantidad] = useState (0);

  const {addToCart} = useContext (CartContext);
  // console.log('valores del contecto',prueba);
  // console.log('cart',prueba.cart);
  // console.log('valores del contecto',prueba);

  const onAdd = (cantidad) => {
    setCantidad (cantidad)
    addToCart(item,cantidad)
  };

  const [numero, setNumero] = useState (0);

 

    const productoActual = item.item
    return (
      <div style={styles.style}>  
        <img src={productoActual.image} alt='' />
        <p>{productoActual.nombre}</p>
        <p>{productoActual.description}</p>
        <p>{productoActual.precio}</p>
        {/* <h2 >{numero}</h2> */}
        {cantidad === 0 ? (<ItemCount numero={numero} setNumero={setNumero} onAdd={onAdd}/>)

        : (<Link to='/cart'>Ir al carrito</Link>)}
       
        
      </div>
    )
}

export default ItemDetail