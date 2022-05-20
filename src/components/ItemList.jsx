import React from 'react'
import Item from './Item'
import { products } from './Data/getFetch'


const ItemList = () => {
  return (
    products.map((prod) => <Item key={prod.id} prod={prod}/>)
    )

}

export default ItemList;



