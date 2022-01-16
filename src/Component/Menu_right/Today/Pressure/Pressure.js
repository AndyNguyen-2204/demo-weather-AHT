import Svg7 from "../../../../CustomSVG/SGV7"
const Pressure=({Pressure})=>{
 return(
    <div className='grid'>
    <div className='grid-inner'>
      <p className='text-top'>Pressure</p>
      <div className='text-center'>
      <Svg7/>
      <p className='content'><span>{Pressure}</span> <span>hPa</span></p>
      </div>
      </div>
  </div>
 )
}
export default Pressure