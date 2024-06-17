import run from "../config/gemin";
import { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { myContext } from "../context.js/myProvider";
import Newchat from "./Newchat";
function Rightside() {
	const { callrun, input, question, setinput, newchat, data, loading } =
		useContext(myContext);
	

	return (
		<div className="border-2 rounded-xl border-red-800 w-full xl:w-[84%] h-screen p-4">
			<div className="flex flex-col">
				<div className="flex justify-between w-full mb-4">
					<div className="text-[36px] ml-[70px] pt-5 pl-3 leading-5 pb-4 shadow-md shadow-slate-700 rounded-xl bg-red-200 ">
						AiAsk
						<div className="p-0 pl-10 pr-3 text-[16px]">powered by Gemini</div>
					</div>
					<div className="avatar max-w-[40px] max-h-[45px] mr-5 mt-5">
						<div className="w-24 rounded-full">
							<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
				</div>

				<div className="h-[70vh] mt-4 overflow-y-scroll shadow-md shadow-slate-800 px-5 border-2 border-slate-400 pt-4 bg-slate-100">
					{newchat ? (
						<div> <Newchat></Newchat> </div>
					) : (
						<div>
							{loading ? (
								<div className="pt-5 flex justify-center">
									<span className="loading loading-ring loading-md bg-red-500"></span>
									<span className="loading loading-ring loading-md bg-red-500"></span>
									<span className="loading loading-ring loading-md bg-red-500"></span>
									<span className="loading loading-ring loading-md bg-red-500"></span>
								</div>
							) : (
								<div>
									<div className="flex bg-slate-300 rounded-2xl mb-4 p-4">
										<div className="avatar max-w-[40px] max-h-[45px] mr-5">
											<div className="w-24 rounded-full">
												<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
											</div>
										</div>
										{question}
									</div>
									<div dangerouslySetInnerHTML={{ __html: data }} />
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			<div className="absolute bottom-9 left-4 right-4 rounded-2xl flex items-center  xl:mx-[300px] ">
				<input
					type="text"
					value={input}
					placeholder="Enter the prompt"
					className="flex-grow p-3 rounded-md border mr-2"
					onChange={(e) => setinput(e.target.value)}
				/>
				<button
					className="p-3 rounded-xl bg-blue-500 text-white"
					onClick={callrun}
				>
					<IoMdSend className="text-xl" />
				</button>
			</div>
		</div>
	);
}

export default Rightside;
