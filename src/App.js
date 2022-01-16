import './App.css';
import './css/index.css'
import Menu_left from './Component/Menu_left/Menu_left';
import Menu_right from './Component/Menu_right/Menu_right'
import {useState} from "react"
function App() {
  const [err, setErr] = useState(false)
  const onchangeStatus=(status)=>{
      setErr(status)
  }
  return (
    <div className='wrapper'>
   <div className='container'>
     <div className='row'>
           <Menu_left  onchangeStatus={onchangeStatus}/>
            <Menu_right err={err}/>
     </div>
   </div>
   </div>
   
    
  );
}
export default App;
