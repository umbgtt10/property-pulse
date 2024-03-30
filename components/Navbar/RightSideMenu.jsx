import LoggedOut from './RightSideMenu/LoggedOut'
import LoggedIn from './RightSideMenu/LoggedIn'

const RightSideMenu = ({isLoggedIn}) => {

  return (
     <>
       { isLoggedIn ? (<LoggedIn />) : (<LoggedOut />)}
     </>          
  )
}

export default RightSideMenu