const ItemDetail = ({product}) => {
    return(
        <div className="row">
             <div className="col">
                 <img className="" src={product.img} alt="" />
             </div>
             <div>
                 <h1>{product.name}</h1>
                 <h2>{product.category}</h2>
                 <p>{product.price}</p>
             </div>
        </div>
    )
}

export default ItemDetail;