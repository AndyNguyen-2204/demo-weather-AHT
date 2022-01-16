
import Svg2 from "../../../../CustomSVG/SVG2"
const Wind_Status=({WindSpeed})=>{
 return(
    <div className='grid'>
                    <div className='grid-inner'>
                      <p className='text-top'>Wind Status</p>
                      <div className='text-center'>
                      <Svg2/>
                      <p className='content'><span>{WindSpeed}</span> <span>km/h</span></p>
                      </div>
                      </div>
                  </div>
 )
}

export default Wind_Status