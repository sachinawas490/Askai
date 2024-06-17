import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";
import { VscThreeBars } from "react-icons/vsc";

function App() {
  return (
    <div className="drawer drawer-mobile bg-red-100 ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <label htmlFor="my-drawer" className="btn  drawer-button m-4 absolute top-0 left-0 p-0">
        <VscThreeBars className="md:size-[23px]"></VscThreeBars>
        </label>
        <Rightside />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-[50%]  sm:w-80 min-h-full bg-base-200 text-base-content ">
          <Leftside />
        </div>
      </div>
    </div>
  );
}

export default App;
