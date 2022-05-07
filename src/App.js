




import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  const onAdd =(cant) =>{
    console.log(`Agregaste ${cant} de productos`)
  }
  return (
    <div className='App'> 
    <NavBar/>
    <ItemListContainer listadeproductos={'Productos'}/>
    <ItemCount onAdd={onAdd}/>
    </div>
  );
}

export default App;
