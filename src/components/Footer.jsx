import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      &copy; {year} Zhang Qixiang
    </footer>
  )
}

export default Footer
