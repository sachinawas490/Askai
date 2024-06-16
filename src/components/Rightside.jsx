import run from "../config/gemin";
import { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { myContext } from "../context.js/myProvider";
function Rightside() {
	// const [input, setInput] = useState("");
	const { callrun, input, question, setinput, newchat, data, loading } =
		useContext(myContext);
	console.log(loading);

	return (
		<div className="relative border-2 border-slate-200 w-[84%] h-screen p-4 ">
			<div className="flex flex-col ">
				<div className=" w-[200px]   ">
					<div className="text-[36px] pt-0 pl-3 leading-5 pt-5 pb-4 shadow-md shadow-slate-400 rounded-md ">
						AiAsk
						<div className="p-0 pl-10 text-[16px]">powered by Gemini</div>
					</div>
				</div>
				<div className=" h-[70vh] mt-4 overflow-y-scroll shadow-md shadow-slate-800 px-5 border-2 border-slate-400 pt-4">
					{newchat ? (
						<div>new chat</div>
					) : (
						<div>
							{loading ? (
								<div className="pt-5    ">
									<span className="loading loading-ring loading-md bg-red-500  "></span>
									<span className="loading loading-ring loading-md bg-red-500 "></span>
									<span className="loading loading-ring loading-md bg-red-500 "></span>
									<span className="loading loading-ring loading-md bg-red-500 "></span>
								</div>
							) : (
								<div className=" ">
									<div className="flex bg-slate-300 rounded-2xl mb-4">
										{" "}
										<div className="avatar max-w-[30px] max-h-[30px] mr-5">
											<div className="w-24 rounded-full">
												<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
											</div>
										</div>{" "}
										{question}
									</div>
									<div dangerouslySetInnerHTML={{ __html: data }} />
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			<div className="absolute bottom-9 left-20 right-20  rounded-2xl ">
				<input
					type="text"
					placeholder="Enter the prompt"
					className="w-full p-3 rounded-md border"
					onChange={(e) => setinput(e.target.value)}
				/>
				<button className="absolute top-3 right-5 rounded-xl " onClick={callrun}>
					<IoMdSend className="text-xl" />
				</button>
			</div>
		</div>
	);
}

export default Rightside;
