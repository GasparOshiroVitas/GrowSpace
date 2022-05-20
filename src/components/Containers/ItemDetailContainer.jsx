
import React, { useState,useEffect } from 'react'
import { getFetch } from '../Data/getFetch'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  const [product, setproduct] = useState({})
  const {detailId} = useParams()

    useEffect(()=>{
        getFetch(detailId)
        .then(response => setproduct(response))
        .catch((err)=>console.log(err))
    },[detailId])
  
    return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}
