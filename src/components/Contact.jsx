import './Contact.css'

const contacts = [
  {
    label: 'Email',
    href: 'mailto:your.email@example.com',
    text: 'e1264831@u.nus.edu',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ZhangQixiang123',
    text: 'github.com/ZhangQixiang123',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    text: 'linkedin.com/in/qixiang-zhang-247a7b3a5/',
  },
]

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index}>
            <span className="contact-label">{contact.label}</span>
            <a href={contact.href} target="_blank" rel="noopener noreferrer">
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
