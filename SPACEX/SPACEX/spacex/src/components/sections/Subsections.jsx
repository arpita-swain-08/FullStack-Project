import { FaArrowRightLong } from "react-icons/fa6"
// import "./websections.css"

const Subsections=({data})=>{
    const{mainheading,subheading,btn,image_url,video_url,pos}=data
    // console.log(img)
    return(
        <div className="cards">
                {(image_url)?<img src={image_url}/>:<video src={video_url} autoPlay muted loop />}
            <div className={`writing ${(pos==="middle")?"middle":(pos==="top-right")?"top_right":(pos==="top-left")?"top_left":(pos==="last-middle")?"last_middle":{}}`}>
                <h1>{mainheading}</h1>
                <p>{subheading}</p>
                <button><pre>{btn}  <FaArrowRightLong style={{marginTop:"1px"}}/></pre></button>
            </div>
        </div>
    )
}
export default Subsections