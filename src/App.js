
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer';
import { ItemDetailContainer } from './components/Containers/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import ItemList from './components/ItemList';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"


function App() {
  const onAdd =(cant) =>{
    console.log(`Agregaste ${cant} de productos`)
  }
  return (
        <BrowserRouter>
            <div className='App'> 
              <NavBar/>
               
              <Routes> 
                <Route path="/" element = {<ItemListContainer listadeproductos={'Productos'}/>} /> 
                <Route path="/" element ={<ItemCount onAdd={onAdd}/>}/>
                <Route path="/" element= {<Item/>}/>
                <Route path="/detalles" element= {<ItemDetailContainer/>}/>
                <Route path="/" element= {<ItemList/>}/>


                
                <Route path="/*" element= { <Navigate to = "/" replace/> }/>
              </Routes>
            

            </div>
        </BrowserRouter>
  );
}

export default App;
