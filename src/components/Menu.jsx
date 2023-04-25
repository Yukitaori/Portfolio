import React from 'react'

function Menu({parts}) {

  const mapMenu = (arr) => {
    return arr.map((element) => {
      return <li key={element}>
        <a href={`#${element}`}>
        {`${element}`}
        </a>
        </li>
    });
  }
  return(
    <ul className='menu'>
     {mapMenu(parts)}
   </ul>
  )
}

export default Menu