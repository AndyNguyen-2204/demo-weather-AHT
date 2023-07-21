
import Svg3 from "../../../../CustomSVG/SGV3"
import Svg4 from "../../../../CustomSVG/SGV4"
import moment from "moment"
const Sunrise_Sunset = ({ Sunrise, Sunset }) => {
  return (
    <div className='grid'>
      <div className='grid-inner'>
        <p className='text-top'>Sunrise & Sunset</p>
        <p className='content-top'>
          <Svg3 />
          {moment.unix(Sunrise).format('LT')}
        </p>
        <p className='content-bottom'>
          <Svg4 />
          {moment.unix(Sunset).format('LT')}
        </p>
      </div>
    </div>
  )
}
export default Sunrise_Sunset