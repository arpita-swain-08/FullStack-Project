import Herosection from "./componets/herosection";
import Navbar from "./componets/navbar"
import Section from "./componets/section";
import "./index.css"
 
function App(){
    return(
        <div className="pages">
          <Navbar/> 
          <Section/> 
          <Herosection/>
        </div>
    )
}

export default App;