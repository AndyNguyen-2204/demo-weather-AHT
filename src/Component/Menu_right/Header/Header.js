import Avatar from "./Avatar/Avatar"
import Tab from "./Tab/Tab"
const Header=({Page,setPage})=>{
   const handleChangePage=(PageName)=>{
       setPage(PageName)
   }
    return(
        <div className='header'>
         <Tab onChangePage={handleChangePage} currentPage={Page}/>
        <Avatar/>
  </div>  
    )
}
export default Header