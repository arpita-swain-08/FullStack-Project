import "/src/index.css"
import profile from "../assets/formal pic.jpg"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Hello, I'm Arpita</h1>
          <h2 className="highlight">React Developer</h2>
          <p>
            I create modern, responsive and beautiful web applications
            using React and JavaScript.
          </p>

          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">Github</a>
            <a href="#">Email</a>
          </div>
        </div>
        <div className="hero-right">
          <img src={profile} alt="profile" className="profile-img" />
        </div>
      </div>

    </section>
  )
}

export default Hero

