import './Profile.css'

function Profile() {
  return (
    <header className="profile">
      <img src="/photo.jpg" alt="Profile" className="profile-image" />
      <h1 className="name">Zhang Qixiang</h1>
      <p className="tagline">Undergraduate Student in NUS School of Computing</p>
      <a href="/CV.pdf" download className="download-cv">
        Download CV
      </a>
    </header>
  )
}

export default Profile
