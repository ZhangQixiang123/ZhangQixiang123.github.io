import './Experience.css' // Reuse CV item styles

const education = [
  {
    title: 'Bachelor of Computing in Computer Science, Second Major in Mathematics',
    date: '2023-Present',
    organization: 'National University of Singapore',
    
  },
]

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div className="cv-item" key={index}>
          <div className="cv-header">
            <span className="cv-title">{edu.title}</span>
            <span className="cv-date">{edu.date}</span>
          </div>
          <p className="cv-org">{edu.organization}</p>
          <p className="cv-description">{edu.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Education
