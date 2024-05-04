import React, { useState } from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Img from '../../src/assets/img.png'
import img_2 from '../../src/assets/img_2.png'
import img_3 from '../../src/assets/img_3.png'
import img_4 from '../../src/assets/img_4.png'
import img_5 from '../../src/assets/img_5.png'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";



const Banner = () => {

const [onCl,setOnCl] = useState(1);
const prev = () =>{
  setOnCl(2);
};
const one = () =>{
  setOnCl(3);
};
const two = () =>{
  setOnCl(4);
};
const three = () =>{
  setOnCl(5);
};
const four = () =>{
  setOnCl(6);
};
const five = () =>{
  setOnCl(7);
};
const dots = () =>{
  setOnCl(8);
};
const other = () =>{
  setOnCl(9);
};
const next = () =>{
  setOnCl(10);
};



  return (
    <div className='w-[1160px] mx-auto bg-[#DCE9F9] py-5'>
        <div className='max-w-[1120px] mx-auto p-5 bg-white rounded-lg'>
          <div className='border-[2px]  pt-2 rounded-lg'>
            <div><div className='flex justify-between pr-[110px] pl-[16px]'><div className='flex gap-[35px] pb-3'><p>Изображение</p><p>Hазвание на узбекском</p></div> <p className='pr-7'>Hазвание на русском</p><p>Статус</p></div>
            
            </div>
            
<div className='flex items-center justify-between pl-[27px] border-y-2 hover:bg-[#F8FAFC]'>
    <div className='flex items-center gap-12 py-2'><img src={Img} alt="" /><p>Баннер 1</p></div>
    <p className='pl-7'>Баннер 1</p>
    <div className='flex items-center gap-9'><button className='px-6 py-2 bg-[#E3EFFE] rounded-lg text-[#4094F7] hover:scale  '>Активный</button><span><HiOutlineDotsHorizontal className='h-[96px] w-[40px] px-[8px]  [box-shadow:-1px_0px_3px_0px_#aaa] text-[#4094F7]' /></span></div>
</div>
<div className='flex items-center justify-between pl-[27px] hover:bg-[#F8FAFC] '>
    <div className='flex items-center gap-12 py-2'><img src={img_2} alt="" /><p>Баннер 1</p></div>
    <p className='pl-7'>Баннер 1</p>
    <div className='flex items-center gap-9'><button className='px-6 py-2 bg-[#E3EFFE] rounded-lg text-[#4094F7] hover:scale '>Активный</button><span><HiOutlineDotsHorizontal  className='h-[96px] w-[40px] px-[8px]  [box-shadow:-1px_0px_3px_0px_#aaa] text-[#4094F7]'/></span></div>
</div>
<div className='flex items-center justify-between pl-[27px] border-y-2 hover:bg-[#F8FAFC]'>
    <div className='flex items-center gap-12 py-2'><img src={img_3} alt="" /><p>Баннер 1</p></div>
    <p className='pl-7'>Баннер 1</p>
    <div className='flex items-center gap-9'><button className='px-6 py-2 bg-[#E3EFFE] rounded-lg text-[#4094F7] hover:scale '>Активный</button><span><HiOutlineDotsHorizontal  className='h-[96px] w-[40px] px-[8px]  [box-shadow:-1px_0px_3px_0px_#aaa] text-[#4094F7]'/></span></div>
</div>
<div className='flex items-center justify-between pl-[27px]  hover:bg-[#F8FAFC]'>
    <div className='flex items-center gap-12 py-2'><img src={img_4} alt="" /><p>Баннер 1</p></div>
    <p className='pl-7'>Баннер 1</p>
    <div className='flex items-center gap-9'><button className='px-6 py-2 bg-[#E3EFFE] rounded-lg text-[#4094F7] hover:scale '>Активный</button><span><HiOutlineDotsHorizontal  className='h-[96px] w-[40px] px-[8px]  [box-shadow:-1px_0px_3px_0px_#aaa] text-[#4094F7]'/></span></div>
</div>
<div className='flex items-center justify-between pl-[27px] border-t-2 hover:bg-[#F8FAFC]'>
    <div className='flex items-center gap-12 py-2'><img src={img_5} alt="" /><p>Баннер 1</p></div>
    <p className='pl-7'>Баннер 1</p>
    <div className='flex items-center gap-9'><button className='px-6 py-2 bg-[#E3EFFE] rounded-lg text-[#4094F7] hover:scale '>Активный</button><span><HiOutlineDotsHorizontal  className='h-[96px] w-[40px] px-[8px]  [box-shadow:-1px_0px_3px_0px_#aaa] text-[#4094F7]'/></span></div>
</div>
            </div>
            <div>
          <hr className='mt-[130px]'/>
          <div className='flex justify-between'>
            <div></div>
         <div className='flex items-center gap-5 pt-4'>   
{
onCl == 2 ? (
         <button onClick={prev} className='text-black bg-white border rounded-lg text-[#0E73F6] p-1' ><GrFormPrevious /></button>

) : (
  <button onClick={prev} className='text-black'><GrFormPrevious /></button>

)

}


{
  onCl == 3 ?(
    <button onClick={one} className='bg-white text-[#0E73F6] border rounded-lg px-2'>1</button>

  ) : (
    <button onClick={one}>1</button>

  )
}

{
  onCl == 4 ? (
    <button onClick={two} className='bg-white text-[#0E73F6] border rounded-lg px-2'>2</button>

  ) : (
    <button onClick={two}>2</button>

  )
}

{
  onCl == 5 ? (
    <button onClick={three} className='bg-white text-[#0E73F6] border rounded-lg px-2'>3</button>

  ) : (
    <button onClick={three}>3</button>

  )
}

{ onCl == 6 ?(
            <button onClick={four}  className='bg-white text-[#0E73F6] border rounded-lg px-2'>4</button>

):(
  <button onClick={four}>4</button>
)}

{
  onCl == 7 ? (
    <button onClick={five}  className='bg-white text-[#0E73F6] border rounded-lg px-2'>5</button>

  ):(
    <button onClick={five}>5</button>

  )
}


{
  onCl == 8 ? (
    <button onClick={dots} className='flex pt-2 bg-white text-[#0E73F6] border rounded-lg px-1'><HiOutlineDotsHorizontal/></button>

  ):
  (
    <button onClick={dots} className='flex pt-2'><HiOutlineDotsHorizontal/></button>

  )
}

{
  onCl == 9 ?(
    <button onClick={other} className='flex bg-white text-[#0E73F6] border rounded-lg px-1'>86</button>

  ):(
    <button onClick={other}>86</button>

  )
}

{
  onCl == 10 ? (
    <button onClick={next} className='text-black bg-white border rounded-lg text-[#0E73F6] p-1'><GrFormNext /></button>

  ):(
    <button onClick={next}><GrFormNext /></button>

  )
}

            
            
            </div>
          </div>
</div>
            </div>
    </div>
  )
}

export default Banner