import React from 'react'

import {Link} from 'react-router-dom'
import styled from 'styled-components';



const ProductItem = ({product}) => {

  return (

      <div>

          <Link to={`/Products/${product.id}`}>
            <h3>{product.title}</h3>
            
              <img src={product.url} />

              <p><b>PRICE: </b>{product.price} SEK</p>

              </Link>

                 
              <Button> <Link to="/Checkout">Add To Cart</Link></Button>

      </div>

  )

}

const Button = styled.button `
background: papayawhip;
font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;`

export default ProductItem
