import "/src/index.css"
// const About = () => {
//   return (
//     <section id="about" className="section">

//       <h2>About Me</h2>
//       <p>
//         I am a passionate React developer skilled in creating modern,
//         responsive, and user-friendly web applications.
//       </p>
//     </section>
//   )
// }


import profile from "../assets/profile.jpg"

const About = () => {
  return (
    <section id="about" className="section about-creative">

      <h2 className="about-title">
        About <span>Me</span>
      </h2>


      <div className="about-main">
 

        <div className="about-image">

         

          <div className="image-glow"></div>

        </div>


   

        <div className="about-content">

          <h3>
            Crafting <span className="gradient-text">beautiful</span> web experiences
          </h3>

          <p>
            I'm Arpita, a passionate React Developer who loves transforming
            ideas into interactive and modern web applications.
          </p>

          <p>
            I enjoy building responsive, user-friendly interfaces and writing
            clean, efficient code. My goal is to create applications that are
            both functional and visually appealing.
          </p>

          <p>
            Currently focused on mastering React, JavaScript, and modern web
            technologies to become a professional full-stack developer.
          </p>


  
          <div className="about-stats">

            <div className="stat">
              <h4>10+</h4>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h4>1+</h4>
              <p>Years Learning</p>
            </div>

            <div className="stat">
              <h4>6+</h4>
              <p>Technologies</p>
            </div>

          </div>

        </div>

      </div>


    

      <div className="floating-cards">

        <div className="floating-card">⚛ React Specialist</div>

        <div className="floating-card">🎨 UI Creator</div>

        <div className="floating-card">💡 Problem Solver</div>

      </div>

    </section>
  )
}

 


export default About
