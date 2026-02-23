import "./App.css"
import Welcome from "./components/Welcome"
import Login from "./components/Login"

const App = () => {
  return (
    <div className="main-container">
      <div className="card-container">
        <Welcome />
        <Login />
      </div>
    </div>
  )
}

export default App