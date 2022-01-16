export default function Tab({onChangePage,currentPage}){
    return(
        <div className='nav-bar'>
        <ul>
        <li role='button' className={currentPage==='today'?"active":''} onClick={()=>{onChangePage('today')}}>
         Today
          </li>
        <li role='button' className={currentPage==='week'?"active":''} onClick={()=>{onChangePage('week')}}>
          Week
          </li>
        <li role='button' className={currentPage==='hour'?"active":''} onClick={()=>{onChangePage('hour')}}>
        Hour
        </li>
        </ul>
      </div>
    )
}