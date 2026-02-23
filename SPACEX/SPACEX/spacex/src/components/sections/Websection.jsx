
import Subsections from "./Subsections"
import astronaut from "../assets/astronaut.jpg"
import mars from "../assets/mars.mp4"
import missile from "../assets/missile.jpg"
import space from "../assets/space.mp4"
import two_missiles from "../assets/two_missiles.mp4"
const Websection=()=>{
    const page=[
        {
            mainheading:"MAKING LIFE MULTIPLANETARY",
            subheading:"SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
            btn:"EXPLORE",
            image_url:null,
            video_url:mars,
            pos:"middle"
        },
        {
            mainheading:"REVOLUTIONIZING SPACE TECHNOLOGY",
            subheading:"SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
            btn:"LEARN MORE",
            image_url:missile,
            video_url:null,
            pos:"top-right"
        },
        {
            mainheading:"WORLD’S LEADING LAUNCH SERVICE PROVIDER",
            subheading:"SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
            btn:"RESERVE YOUR RIDE",
            image_url:null,
            video_url:two_missiles,
            pos:"top-left"
        },
        {
            mainheading:"ADVANCING HUMAN SPACEFLIGHT",
            subheading:"Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
            btn:"JOIN A MISSION",
            image_url:astronaut,
            video_url:null,
            pos:"top-right"
        },
        {
            mainheading:"DELIVERING HIGH-SPEED INTERNET FROM SPACE",
            subheading:"Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
            btn:"ORDER NOW",
            image_url:null,
            video_url:space,
            pos:"last-middle"
        }
    ]
    // console.log(astronaut)
    return(
        <div className="mainpage">
            {
                page.map((sec)=>{
                     return <Subsections data={sec}/>

                 })
            }
        </div>
    )
}
export default Websection