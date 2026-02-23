import "/src/index.css"
// const Skills = () => {

//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Bootstrap",
//     "Git"
//   ]

//   return (
//     <section id="skills" className="section">

//       <h2>Skills</h2>

//       <div className="skills-container">

//         {skills.map((skill, index) => (
//           <div key={index} className="skill">
//             {skill}
//           </div>
//         ))}

//       </div>

//     </section>
//   )
// }


const Skills = () => {

  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Bootstrap", level: "80%" },
    { name: "Git", level: "70%" }
  ]

  return (
    <section id="skills" className="section">

      <h2>My Skills</h2>

      <div className="skills-wrapper">

        {skills.map((skill, index) => (

          <div key={index} className="skill-box">

            <div className="skill-header">

              <span>{skill.name}</span>

              <span>{skill.level}</span>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: skill.level }}
              >

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}




export default Skills
