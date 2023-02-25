import ".header.css"
import Logout from '../logout/logout'

const Header =() =>{

    const userId = localStorage.getItem("userid");
    const userName = userId.split('@')[0]

    return(
        <>
        <div className="headercontainer">
            <div className="userid">user id :{userId}</div>
            <div className="dropdown-content">
                <Logout/>
            </div>
        </div>
        <div className="headerbtmline"></div>
        </>
    )
}
export default Header