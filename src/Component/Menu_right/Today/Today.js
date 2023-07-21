import Uv_index from "./UV_index/UV_index";
import Wind_Status from "./Wind_Status/Wind_Status";
import Sunrise_Sunset from "./Sunrise_Sunset/Sunrise_Sunset";
import Humidity from "./Humidity/Humidity";
import Visibility from "./Visibility/Visibility";
import Pressure from "./Pressure/Pressure";
import { useSelector } from "react-redux";
const Today = () => {
  const data = useSelector(state => state.Fetch_API.data)
  const Uvi = data?.current?.uvi
  const WindSpeed = (data?.current?.wind_speed * 3.6).toFixed(2)
  const Sunrise = data?.current?.sunrise
  const Sunset = data?.current?.sunset
  const Humidity_ = data?.current?.humidity
  const Visibility_ = data?.current?.visibility / 1000
  const Pressure_ = data?.current?.pressure
  return (
    <div className='row'>
      <div className='menu-right-inner'>
        <Uv_index Uvi={Uvi} />
        <Wind_Status WindSpeed={WindSpeed} />
        <Sunrise_Sunset Sunrise={Sunrise} Sunset={Sunset} />
        <Humidity Humidity={Humidity_} />
        <Visibility Visibility={Visibility_} />
        <Pressure Pressure={Pressure_} />
      </div>
    </div>
  )
}
export default Today;