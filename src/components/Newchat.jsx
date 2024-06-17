import React from 'react';

function Newchat() {
  return (
    <div className='flex flex-col text-[36px] pl-[5%] pr-[5%] lg:pl-[10%] lg:pr-[10%] py-10'>
    <div className=" bg-gradient-to-r from-blue-600 via-green-500 to-red-400 inline-block text-transparent bg-clip-text">
        Hello, Dev.
      </div>
      

      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-red-400 inline-block text-transparent bg-clip-text">
        How can I help you today?
      </div>
      <div className='flex flex-wrap justify-center gap-4 mt-8'>
        <div className="w-[120px] min-h-[70px] border-2 border-slate-800 p-4 rounded-xl text-[15px] bg-white hover:bg-gray-100 transition">
          Suggest beautiful places to see on an upcoming road trip
        </div>
        <div className="w-[120px] min-h-[70px] border-2 border-slate-800 p-4 rounded-xl text-[15px] bg-white hover:bg-gray-100 transition">
          Briefly summarize this concept: urban planning
        </div>
        <div className="w-[120px] min-h-[70px] border-2 border-slate-800 p-4 rounded-xl text-[15px] bg-white hover:bg-gray-100 transition">
          Brainstorm team bonding activities for our work retreat
        </div>
        <div className="w-[120px] min-h-[70px] border-2 border-slate-800 p-4 rounded-xl text-[15px] bg-white hover:bg-gray-100 transition">
          Brainstorm team bonding activities for our work retreat
        </div>
      </div>
    </div>
  );
}

export default Newchat;
