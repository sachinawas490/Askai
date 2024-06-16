import Leftside from "./components/Leftside"
import Rightside from "./components/Rightside"
function App() {
  
  return (
    <div className='flex w-screen h-screen border-2 border-slate-200 bg-slate-100'>
    <Leftside></Leftside>
    <Rightside> </Rightside>
    </div>
  )
}


export default App
