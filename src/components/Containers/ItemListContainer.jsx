import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { getFetch } from "../Data/getFetch";


//Aca se van a mostrar los items para la venta
const ItemListContainer = () => {
    const [products,SetProducts] = useState([]);
    const [loading,SetLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        if (id) {
            getFetch()
            .then(response => SetProducts(response.filter((prods)=>prods.category === id)))
            .catch((err)=> console.log(err))
            .finally(()=>SetLoading(false))
        }else{
            getFetch()
            .then(response=>SetProducts(response))
            .catch((err)=> console.log(err))
            .finally(()=>SetLoading(false))
        }
    },[id])
    
    
    
    
    
    
    
    return (
        <div>
            { loading ?
                <h2>Cargando...</h2>
                :
                <div style={{display:`flex`,flexDirection:`row`, flexWrap:`wrap`}}>
                  <ItemList products={products}/>
                </div>
            }
        </div>
    )
}

export default ItemListContainer