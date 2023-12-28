import React, { useContext } from 'react';
import All_Data from '../components/assets/aac';
import { useParams } from 'react-router-dom';
import "./Product.css";
import { ShopContext} from '../Context/ShopContext';

const Product = () => {

  

  const {id} = useParams();

 
  const{addToCart}=useContext(ShopContext);


  const products = All_Data.find((data)=>data.id === id)

  return (
    <div className='product'>

        <div className="product-img">
          <img onClick={window.scrollTo(0,0)} src={products.image} alt=""/>
        
      </div>
      <div className='product-details'>
        <div className="product-name">
          <h1>{products.name}</h1>
        </div>
        <div className="product-price">
        <div className="product-old_price">RS {products.old_price}</div>
          <div className="product-new_price">RS {products.new_price}</div>
          
        </div>

        <div className="product-desc">
          <p>{products.description}</p>
        </div>
        <div className="product-size">
          <h1>Select Size</h1>
          <div className="product-select-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={()=>addToCart(products.id)}>ADD TO CART</button>
          <p className='product_category'><span>Category : </span>{products.category}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Product;