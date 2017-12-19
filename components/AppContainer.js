import React from 'react'
import { Link } from 'react-dom'
const AppContainer = props => {
  return (
 
    <div>
      <Link to='/'>Home</Link>
      { ' | ' }
      <Link to='/about'>About</Link>
      {props.children}  
      
      
    </div>
  )
}
export default AppContainer
 