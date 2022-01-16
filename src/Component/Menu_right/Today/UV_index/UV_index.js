
import Svg1 from "../../../../CustomSVG/SGV1"
const Uv_index=({Uvi})=>{
 return(
    <div className='grid'>
    <div className='grid-inner'>
      <p className='text-top'>UV index</p>
      <div className='text-center'>
     <Svg1/>
      <p className='content'>{Uvi}</p>
      </div>
      </div>
  </div>
 )
}
export default Uv_index