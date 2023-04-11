import './Intro.css'
import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
  return (
    <div id="about" className="section_margin intro-content">
      <img className="bgImage" src={require('../assets/images/bannerImg.gif')} />
      <div className="herocontent">
        <h2>Hello World, I'm</h2>
        <div className="header">Vignesh Kannaa</div>
        <div className="intro-desc">
          <TypeAnimation
            sequence={['Software Developer', 1000, 'Machine Learning Engineer', 1000]}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  )
}
export default Intro
