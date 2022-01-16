import { useSelector } from "react-redux"
import moment from "moment"
const Spec_Sheet=(props)=>{
    const defaultData = props.data
    const reducerData=useSelector(state=>state.ClickData)
    const tempCurrent=(reducerData?.data?.temp?.day) ? reducerData?.data?.temp?.day:defaultData[0].temp.day
    const tempMin=(reducerData?.data?.temp?.min)?reducerData?.data?.temp?.min:defaultData[0].temp.min
    const tempMax=(reducerData?.data?.temp?.max)?reducerData?.data?.temp?.max:defaultData[0].temp.max
    const humidity=(reducerData?.data?.humidity)?reducerData?.data?.humidity:defaultData[0].humidity
    const speed=(reducerData?.data?.wind_speed)?(reducerData?.data?.wind_speed*3.6).toFixed(2):(defaultData[0].wind_speed*3.6).toFixed(2)
    const sunrise=reducerData?.data.sunrise?moment.unix(reducerData?.data?.sunrise).format('LT'):moment.unix(defaultData[0].sunrise).format('LT')
    const sunset=reducerData?.data.sunset?moment.unix(reducerData?.data?.sunset).format('LT'):moment.unix(defaultData[0].sunset).format('LT')
    const description=reducerData?.data?.weather?.description?reducerData?.data?.weather[0].description:defaultData[0].weather[0].description
    const pressure=reducerData?.data?.pressure?reducerData?.data?.pressure:defaultData[0].pressure
    const day=reducerData?.data?.dt?moment.unix(reducerData?.data?.dt).format('ddd,DD/MM'):moment.unix(defaultData[0].dt).format('DD/MM')
      
    return(
       <div className='spec-sheet'>
           <p className='spec-sheet-content'>{day}</p>
           <div className='row'>
               <div className='spec-sheet-left'>
                   <p className='text'><span>Temp current:</span><span>{tempCurrent} </span><span>°C</span></p>
                   <p className='text'>Temp : <span>{tempMin}</span> °C - <span>{tempMax}</span> °C</p>
                   <p className='text'>Humidity : {humidity} %</p>
                   <p className='text'>Wind speed : <span>{speed}</span> <span>km/h</span></p>
               </div>
               <div className='spec-sheet-right'>
                   <p className='text'>Sunrise : {sunrise} </p>
                   <p className='text'>Sunset : {sunset}</p>
                   <p className='text'>Description : {description}</p>
                   <p className='text'>Atmospheric pressure : {pressure} <span>hPa</span></p>
               </div>
           </div>
       </div>

)
}
export default Spec_Sheet