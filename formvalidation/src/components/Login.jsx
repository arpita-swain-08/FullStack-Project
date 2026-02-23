const Login = () => {
  return (
    <div className="login-section">
      <h2>Sign In</h2>

      <div className="input-box">
        <input type="text" required />
        <label>Username</label>
      </div>

      <div className="input-box">
        <input type="password" required />
        <label>Password</label>
      </div>

      <button className="gradient-btn">Login</button>

      <p className="signup-text">
        Don't have an account? <span>Sign Up</span>
      </p>
    </div>
  )
}

export default Login