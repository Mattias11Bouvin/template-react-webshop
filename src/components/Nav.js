import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Nav() {
  return (
    <nav>
        <Button><Link to="/Products">Products</Link> | <Link to="/Checkout">Checkout</Link></Button>
    </nav>
  )
}
const Button = styled.button `
background: papayawhip;
font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
`

export default Nav