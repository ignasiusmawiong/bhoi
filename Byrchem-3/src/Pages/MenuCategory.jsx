import React from 'react'

const MenuCategory = (props) => {
  return (
    <div className='menu-cat'>
         <img className='menu-cat-banner' src={props.banner} width={'100%'} alt="" />
          web developers
    </div>
  )
}

export default MenuCategory