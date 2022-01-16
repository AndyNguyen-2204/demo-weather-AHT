import moment from 'moment';
import { useSelector } from 'react-redux';
import Chart_temp from './Chart_temp/Chart_temp';
const Chart_index=()=>{
  const dataReducer = useSelector(state => state.Fetch_API.data)
  const hour=(dataReducer.hourly).map((item,index)=>{
    return(
      item=moment.unix(item.dt).format('LT')
      
    )
  })
  const temp=(dataReducer.hourly).map((item,index)=>{
    return(
      item=item.temp
      
    )
  })

 const temp_feels_like=(dataReducer.hourly).map((item,index)=>{
    return(
      item=item.feels_like
      
    )
  })
return (
  <Chart_temp hour={hour} temp={temp} temp_feels_like={temp_feels_like}/>
)
}
export default Chart_index