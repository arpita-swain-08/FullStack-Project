import { GiHamburgerMenu } from "react-icons/gi"

// import "./nav.css"
const Navlist=()=>{
    const navlist=["VEHICLES","LAUNCHES","HUMAN SPACEFLIGHT","RIDESHARE","STARLINK","STARSHEILD","XAI","COMPANY","SHOP"]
    return(
        <div className="navss">
            <div className="navlist">
            <ul>
                {
                    navlist.map((list)=>{
                        return <li>{list}</li>
                    })
                }
            </ul>
            </div>
        <div className="line"><GiHamburgerMenu/></div>
        </div>
    )
}
         
export default Navlist