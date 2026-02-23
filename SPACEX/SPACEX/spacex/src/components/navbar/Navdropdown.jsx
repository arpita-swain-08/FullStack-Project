// import "./nav.css"
const Navdropdown=()=>{
    const dropdown=["UPCOMING LAUNCHES"]
    return(
        <div className="navdrop">
            <select>
                {
                    dropdown.map((lists)=>{
                        return <option>{lists}</option>
                    })
                }
            </select>
        </div>
        )
}
         
export default Navdropdown