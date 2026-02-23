import { useState } from "react"
import Background from "./background"

const Mainpage = () => {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState
    ("")
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conformpassword, setConformPassword] = useState("")
  const [change, setChange] = useState(false)
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleCPassword = (e) => {
    setConformPassword(e.target.value)
  }
  const handleChange = (e) => {
    e.target.value = true;
    setChange(e.target.value)
  }
  const submitForm = (e) => {
    e.preventDefault();
    if (password === conformpassword && change) {
      console.log(firstname);
      console.log(lastname);
      console.log(username);
      console.log(email);
      console.log(password);
      console.log(conformpassword);
      console.log(change);

    }


  }


  return (
    <div className="mainpage">
      <div className="leftmain">
        <div className="main-container">
          <div className="imagecontainer"></div>
          <div className="textmain">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse iste soluta aut nobis nemo exercitationem distinctio rerum. Incidunt, ducimus cum. Illo soluta sequi recusandae! </p>
          </div>
          <div className="buttoncontainer">
            <button>GET STARTED</button>
          </div>
        </div>
      </div>

      <div className="rightmain">
        <Background />
        <div className="rightmain-container">
          <div className="upper">
            <p className="register">Register</p>
            <p className="createyour">Create your account. It's free and only takes a minute</p>
            <div className="crosslogo"></div>
          </div>
          <div className="formcontainer">
            <form onSubmit={submitForm}>
              <div className="firstname">
                <div className="logo"></div>
                <input type="text" placeholder="FirstName" onChange={handleFirstName} />
              </div>
              <div className="lastname">
                <div className="logo"></div>
                <input type="text" placeholder="Last Name" onChange={handleLastName} />
              </div>
              <div className="username">
                <div className="logo"></div>
                <input type="text" placeholder="User name" onChange={handleUserName} />
              </div>
              <div className="email">
                <div className="logo"></div>
                <input type="email" placeholder="Email" onClick={handleEmail} />
              </div>
              <div className="password">
                <div className="logo"></div>
                <input type="password" placeholder="Password" onChange={handlePassword} />
              </div>
              <div className="conform-password">
                <div className="logo"></div>
                <input type="password" placeholder="Password" onClick={handleCPassword} />
              </div>
              <div className="thik-text">
                <input type="checkbox" name="" id="" onChange={handleChange} />
                <p>Accepect the Terms of Use and Privecy Policy</p>
              </div>
              <div className="signupcontainer">
                <p>Already a member?</p>
                <a href="">Sign in</a>
                <button className="signup">SIGN UP</button>
              </div>
            </form>
          </div>
          <div className="line">
            <div className="leftline"></div>
            <p className="onsignup">Or Sign In With</p>
            <div className="rightline"></div>
          </div>
          <div className="lower">
            <div className="circlecontainer">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mainpage