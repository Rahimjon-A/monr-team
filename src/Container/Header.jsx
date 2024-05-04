import React from 'react'
import HeaderTop from '../components/HeaderTop'
import HeaderBot from '../components/HeaderBot'

const Header = ({title, update, hidden}) => {
  return (
    <div className='w-full z-10' >
        <HeaderTop title={title} update={update} />
        <HeaderBot hidden={hidden} />
    </div>
  )
}

export default Header