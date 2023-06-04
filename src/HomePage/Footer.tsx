import './Footer.css'
const Footer = () => {
  const gitHub = 'https://github.com/vignesh-kannaa/portfolio'
  return (
    <div className="ion-text-center test">
      <a target="_blank" rel="noreferrer" href={gitHub}>
        <h5>Designed and Developed by Vignesh Kannaa.</h5>
        <h5> Built with React & Ionic.</h5>
      </a>
    </div>
  )
}
export default Footer
