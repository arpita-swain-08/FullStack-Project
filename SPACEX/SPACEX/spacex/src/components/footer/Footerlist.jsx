// import "./footer.css"
const Footerlist=()=>{
    const footarr=["CAREERS","UPDATES","PRIVACY POLICY","SUPPLIERS"]
    return(
        <div className="footss">
            <div className="footlist">
            <ul>
                {
                    footarr.map((list)=>{
                        return <li>{list}</li>
                    })
                }
            </ul>
            </div>
        </div>
    )
}
         
export default Footerlist