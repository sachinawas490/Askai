import React, { useContext } from 'react'
import { IoMdAdd } from "react-icons/io";
import { myContext } from '../context.js/myProvider';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

function Leftside() {
  const {recent,setdata}=useContext(myContext);
  return (
    <div className='w-[15%] border-2 border-slate-200 flex flex-col'>
        <div className="avatar absolute right-4 top-4 w-[50px] ">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
        <button onClick={()=>setdata("")} className='flex btn bg-slate-400  bg-slate-800 mt-[60px] mx-4 rounded-xl'>
        <IoMdAdd></IoMdAdd>  New Chat

        </button>
        <h1 className='my-3 pl-4 text-[25px]'>Recent</h1> 
        <div className='border-2 border-slate-200 mb-3'>
  
        </div>

        <div className='h-[50vh]  pl-5 overflow-y'>
          {
            recent.map((val,key)=>
              <button onClick={()=>setdata(val.data)} key={key} className='w-[190px] my-1 whitespace-nowrap overflow-hidden text-ellipsis inline-block p-2 border border-gray-300 rounded bg-gray-100 text-gray-800'>{val.input}</button>
            )
          }
        </div>
        <div className='absolute bottom-2 pl-4 text-[23px] mt-5 '>
        <IoMdHelpCircleOutline className='my-1'  /> 
        <FaClockRotateLeft className='my-2' />
        <IoSettingsSharp  className='1'/>
        </div>
        
    </div>
  )
}

export default Leftside
