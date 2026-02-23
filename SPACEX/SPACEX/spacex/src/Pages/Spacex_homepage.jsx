import Footerspace from "../components/footer/Footerspace"
import Nav from "../components/navbar/Nav"
import Navdropdown from "../components/navbar/Navdropdown"
import Navlist from "../components/navbar/Navlist"
import Websection from "../components/sections/Websection"

const Spacex_homepage=()=>{
    return(
        <div className="homepage">
          <Nav/> 
          <Websection/>
          <Navdropdown/>
          <Footerspace/>
        </div>
    )
}
export default Spacex_homepage