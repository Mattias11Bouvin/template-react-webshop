import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Product() {
  const params = useParams();
  console.log(params);
  
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
      try {
          
          const response = await fetch('https://codexplained.se/sportstuff.php?id=' + params.id)
          const data = await response.json();
          console.log()
          setProduct(data);
      } catch (error) {
          console.log(error)
      }
  }

    useEffect( () => {
     fetchProduct() }, [])
  
  return (
  <div>
       <Wrapper><motion.h1
            initial={{x: -400, y: -200, opacity: 0}}
            animate={{x: 100, y: 100, opacity: 1,}}
            transition={{ease: "easeOut", duration: 3, delay: 1}}
       >Product - {[params.id]}
       <h3>{product.title}</h3></motion.h1>
            
       <img src={product.url}/>

              <p><b>PRICE: </b>{product.price} SEK</p>

              <p><b>Storage: </b>{product.storage} </p>
              <p><b>Description: </b>{product.description} </p>
              <button> <Link to="/Checkout">Add To Cart</Link></button></Wrapper>
       
            

  </div>
  )
}

const Wrapper = styled.div`
color: green;
`
export default Product