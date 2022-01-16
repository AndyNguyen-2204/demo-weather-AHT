import { useDispatch,useSelector } from "react-redux"
import { useState,useEffect } from "react"
import moment from "moment"
import { actFetchApiRequest } from "../Redux/Actions/Index"
import axios from "axios"
const Menu_left=({onchangeStatus})=>{
 const [value, setValue] = useState('Ha noi')
 const [text, setText] = useState('')
 const [data, setData] = useState([])
 const dataReducer = useSelector(state => state.Fetch_API.data)
 const dispatch=useDispatch()

 //Call api lấy tọa đọ lon và lat của thành phố 
  useEffect(()=> {
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=2582c73b4705b7795839e9e600dc5b73&units=metric`)
   .then(res=>{
     setData(res.data)
     dispatch(actFetchApiRequest(res.data))
     onchangeStatus(false)
   }).catch(error=>onchangeStatus(true))
  }, [value])
  
  //check nếu người dùng ấn Enter thì set value 
     const onKey=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault()
      setValue(text)
    }
  }
    return(
        <div className='menu-left'>
        <div className='menu-left-wrap'>
          <form className='form' value={value}  onKeyPress={onKey} >
          <input className='menu-left-wrap-input' onChange={(event)=>setText(event.target.value)}  type='text' placeholder='Search' data-toggle='tooltip' data-placeholder='top'>
          </input>
          </form>
          <img id="ImgWeather" src="https://react-weather-app-762e5.web.app/img/Clouds.png"
          alt="#"></img>
          <div className='text'>{data.name}</div>
          <div className='temperature'>
            {dataReducer?.current?.temp}
            <span>°C</span>
            </div>
          <div className='time'><span>{moment.unix(dataReducer?.current?.dt).format('dddd,LT')}</span></div>
          <div className='info'>
           {dataReducer?.current?.weather[0].description}
            <br/>
            Clouds <span>{dataReducer?.current?.clouds}</span><span>%</span>
          </div>
          <div className='img-fluid'>
            <div className='img-fluid-content'>{data.name}</div>
            <div><img src='https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6' alt="#"></img></div>
          </div>
        </div>
      </div>
    )
}

export default Menu_left;