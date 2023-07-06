import './Footer.css'
const Footer = () => {
  const gitHub = 'https://github.com/vignesh-kannaa/portfolio'
  return (
    <div className="ion-text-center">
      <a target="_blank" rel="noreferrer" href={gitHub}>
        <h5 className="footer">
          Designed and Developed by Vignesh Kannaa. Built with React & Ionic.
        </h5>
      </a>
    </div>
  )
}
export default Footer
