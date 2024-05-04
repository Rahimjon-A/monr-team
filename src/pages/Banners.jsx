import Sidebar from '../Container/Sidebar'
import Header from '../Container/Header'
import { useState } from 'react'
import Banner from './Banner'

const Banners = ({expand, Expander}) => {

    


  return (
    <div className='flex  ' >
    <Sidebar expand={expand} Expander={Expander} />
    <div className='w-full' >
        <div className=' sticky top-0' >
        <Header title="Список баннеров" update="hidden" />
        </div>

        <div>
          <Banner/>
          
        </div>
    </div>
</div>
  )
}

export default Banners