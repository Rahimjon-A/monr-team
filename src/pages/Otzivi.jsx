import Sidebar from '../Container/Sidebar'
import Header from '../Container/Header'
import Otziv from './Otziv'

const Otzivi = ({expand, Expander}) => {


  return (
    <div className='flex' >
        <Sidebar expand={expand} Expander={Expander} />
        <div className='w-full' >
           <div className=' sticky top-0 z-10' >
           <Header title="Список отзывов" hidden="hidden" />
           </div>

            <div className=' m-5 rounded-lg bg-white z-0 ' >
              <Otziv/>
            </div>
        </div>
    </div>
  )
}

export default Otzivi