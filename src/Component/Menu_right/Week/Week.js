import { useSelector } from 'react-redux'
import {useState} from "react"
import '../../../css/week.css'
import Grid from './Grid/Grid'
import Spec_Sheet from './Grid/Spec_Sheet'
const Week=()=>{
 const data = useSelector(state => state.Fetch_API.data)
 const [itemActive, setItemActive] = useState(0)
 const daily=data.daily
 const handleActive=(index)=>{
   setItemActive(index)
 }
    return(
        <div>
        <div className="row">
            <div className="wrap-week">
                {daily.map((item,index)=><Grid item={item} key={index.dt} index={index} onActive={handleActive} itemActive={itemActive} />)}
            </div>
        </div>
       <Spec_Sheet data={daily}/>
        </div>
    )
}
export default Week