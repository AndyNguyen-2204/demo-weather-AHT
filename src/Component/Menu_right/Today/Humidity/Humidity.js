
import Svg5 from "../../../../CustomSVG/SGV5"
const Humidity = ({ Humidity }) => {
  return (
    <div className='grid'>
      <div className='grid-inner'>
        <p className='text-top'>Humidity</p>
        <div className='text-center'>
          <Svg5 />
          <p className='content'>{Humidity}%</p>
        </div>
      </div>
    </div>
  )
}
export default Humidity