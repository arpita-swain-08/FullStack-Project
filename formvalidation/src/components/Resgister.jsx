import { useState } from "react"
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"

const Register = ({ switchToLogin }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-card">
      <h2>Create Account</h2>

      <div className="input-box">
        {/* <FaUser className="icon" /> */}
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <label>Name</label>
      </div>

      <div className="input-box">
        {/* <FaEnvelope className="icon" /> */}
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <label>Email</label>
      </div>

      <div className="input-box">
        {/* <FaLock className="icon" /> */}
        <input
          type="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
        />
        <label>Password</label>
      </div>

      <button className="gradient-btn">Register</button>

      <p className="switch-text">
        Already have an account?{" "}
        <span onClick={switchToLogin}>Sign In</span>
      </p>
    </div>
  )
}

export default Register