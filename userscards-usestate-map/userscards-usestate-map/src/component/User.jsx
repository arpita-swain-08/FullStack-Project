import { useState } from "react";
import Usercard from "./Usercard";
import { Atom } from "react-loading-indicators";

const User = () => {
  const [users, setUsers] = useState([])
  const [load, setLoad] = useState(false)

  const fetchUser = async () => {
    try {
      setLoad(true)
      const fdata = await fetch("https://api.github.com/users")
      const data = await fdata.json()
      setTimeout(()=>{
        setLoad(false)
        setUsers(data)
      },1000)
    } catch (error) {
      console.log(error.message)
    }
  }

  const deleteUser = (id) => {
    const filterUsers = users.filter((ele) => ele.id !== id)
    setUsers(filterUsers)
  }

  return (
    <div className="main">


      <button onClick={fetchUser}>Fetch Users</button>
      <div className="card-container">
        {
          load?<div className="load"><Atom color="#32cd32" size="large" text="Loading........" textColor="#NaNNaNNaN" /></div>:
          users.map((user) => (
            <Usercard user={user} deleteUser={deleteUser} />))
        }
      </div>
    </div>
  )
}
export default User
