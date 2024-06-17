import React, { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { myContext } from "../context.js/myProvider";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

function Leftside() {
  const { recent, setdata,setquestion } = useContext(myContext);
 function handleclick(val){
  setdata(val.data);
  console.log("question",val.input);
  setquestion(val.input);
 }

  return (
    <div className="w-full border-2 border-slate-200 flex flex-col p-4">
      <div className="avatar mb-4">
        <div className="w-14 md:w-22 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <button
        onClick={() => setdata("")}
        className="flex items-center btn bg-slate-400 text-white mb-4 rounded-xl"
      >
        <IoMdAdd className="mr-2" /> New Chat
      </button>
      <h1 className="text-[25px] mb-3">Recent</h1>
      <div className="border-2 border-slate-200 mb-3"></div>
      <div className="h-[50vh] overflow-y-auto">
        {recent.map((val, key) => (
          <button
            onClick={()=>handleclick(val)}
            key={key}
            className="w-full my-1 whitespace-nowrap overflow-hidden text-ellipsis inline-block p-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
          >
            {val.input}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-[23px] mt-5">
        <IoMdHelpCircleOutline className="my-1" />
        <FaClockRotateLeft className="my-2" />
        <IoSettingsSharp className="my-1" />
      </div>
    </div>
  );
}

export default Leftside;
