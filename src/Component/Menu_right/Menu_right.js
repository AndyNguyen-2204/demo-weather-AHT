import Header from "./Header/Header"
import { useState } from "react"
import Week from "./Week/Week"
import Hour from "./Hour/Chart_index"
import Today from "./Today/Today"
const Menu_right = ({ err }) => {
  const [Page, setPage] = useState('today')
  const render = Page === 'today' ? <Today /> : (Page === 'week' ? <Week /> : <Hour />)
  return (
    <div className='menu-right'>
      <div className='wrap'>
        {err === true ? <div className=" alert alert-danger">Not found city</div> : ''}
        <Header Page={Page} setPage={setPage} />
        {render}
      </div>
    </div>
  )
}
export default Menu_right