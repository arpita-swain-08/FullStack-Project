import Card from "./components/Card"
import users from "/src/Data.js"
import "/src/Data.js"

const App = ()=>{
    return(
         <div className="app">
            {users.map((user)=>(
                <Card key={user.username} user={user}/>
            )
            
            
            )}
         </div>
    )
}

export default App