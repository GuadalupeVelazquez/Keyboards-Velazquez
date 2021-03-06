
import React from 'react';
import ItemListContainer from './components/Contenedor/ItemListContainer';
import ResponsiveAppBar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Provider from './context/cartContext';






function App() {
 
  return (
    <Provider>
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element = { <ItemListContainer textoSaludo= "Bienvenido a Keyboards"/> } />
        <Route path='/detalle/:id' element ={<ItemDetailContainer/>} />
        <Route path='/categorias/:categoria' element = {<ItemListContainer/>  } />
        <Route path='/cart' element ={<Cart/>} />
      </Routes>
   </BrowserRouter>
   </Provider>
   
  );
}

export default App;
