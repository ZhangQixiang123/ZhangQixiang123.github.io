import './Experience.css'

const experiences = [
  {
    title: 'Job Title',
    date: '2023 - Present',
    organization: 'Company Name',
    description: 'Brief description of your role and responsibilities.',
  },
  {
    title: 'Previous Position',
    date: '2020 - 2023',
    organization: 'Previous Company',
    description: 'Brief description of what you did in this role.',
  },
]

function Experience() {
  return (
    <section id="experience">
      <h2>Project Experience</h2>
      {experiences.map((exp, index) => (
        <div className="cv-item" key={index}>
          <div className="cv-header">
            <span className="cv-title">{exp.title}</span>
            <span className="cv-date">{exp.date}</span>
          </div>
          <p className="cv-org">{exp.organization}</p>
          <p className="cv-description">{exp.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Experience
