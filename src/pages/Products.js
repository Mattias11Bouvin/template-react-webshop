import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Products() {
  const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://codexplained.se/sportstuff.php')
            const data = await response.json();
            
            console.log(data);
            setProducts(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
      fetchProducts()
    }, [])
  return (
    <div>
      
            <PageWrapper
            as={motion.div}
            initial={{ x: 700, }}
            animate={{ x: 0}}
            transition={{ease: "easeOut", duration: 3, }}
            >
              <h1>Products</h1>

            {products.map((product) => (<ProductItem key={product.id} product={product} />))}</PageWrapper>
        
      </div>
  )
}
const PageWrapper = styled.div`
color: green;
`
export default Products