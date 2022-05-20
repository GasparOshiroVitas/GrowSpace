import { Card , Button } from "react-bootstrap";
import { getFetch } from "./Data/getFetch";
import {Link} from "react-router-dom"

const Item = ( {prod} ) => {
return(
  <div className="col-md-4">
    <div className="card w-100 mt-5">
      <div className="card-header">
      { `${prod.name} - ${prod.category}` }
      </div>
    <div className="card-body">
      <img src={prod.img} alt="" className="w-50" />
      {prod.price}
    <div className="card-footer">
      <Link to ={`/detalle/${prod.id}`}>
          <Button className="btn btn-outline-primary btn-block">
            Detalle de producto
          </Button>
      </Link>
      </div>
      </div>
    </div>
  </div>

)}
export default Item;