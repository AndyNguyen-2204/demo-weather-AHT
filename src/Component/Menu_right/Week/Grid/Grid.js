import moment from "moment"
import { useDispatch } from "react-redux"
import { actClickData } from "../../../Redux/Actions/Index"
import { useState } from "react"
const Grid=(props)=>{
    const data=props.item
    const dispatch=useDispatch()
    const tempMin=Math.round(data?.temp?.min)
    const tempMax=Math.round(data?.temp?.max)
    const day=moment.unix(data?.dt).format('ddd,DD/MM')
    const index=props.index
    const onActive=props.onActive
    const itemActive=props.itemActive
    
    return(
        <div className="grid" onClick={()=>{onActive(index)}}>
                    <div className={itemActive===index?'Grid-inner Color':'Grid-inner noColor'} onClick={()=>{dispatch(actClickData(data))}} >
                        <p className="text-top">{day}</p>
                        <div className="text-center">
                       <img src={`https://openweathermap.org/img/w/${data?.weather[0].icon}.png`} alt="#"></img>   
                       <p>
                           <span>{tempMin}</span>
                           <span>°</span>
                           <span>-</span>
                           <span>{tempMax}</span>
                           <span>°</span>
                       </p>
                        </div>
                    </div>
                </div>
    )
}
export default Grid