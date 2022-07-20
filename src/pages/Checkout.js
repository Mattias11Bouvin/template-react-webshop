import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Checkout() {
  
  
  return (
  <div>
       <Wrapper><motion.h1
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 3}}
       >Detta var en rolig och lärorik uppgift.</motion.h1></Wrapper>
      
  </div>
  )
}

const Wrapper = styled.div`
color: green;
`
export default Checkout