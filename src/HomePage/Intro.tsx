import RobotCanvas from '../3dmodel/RobotCanvas'
import './Intro.css'
import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
  return (
    <div id="intro" className="section_margin intro-content">
      {/* <img className="bgImage" src={require('../assets/images/bannerImg.gif')} /> */}
      <RobotCanvas />
      <div className="herocontent">
        <h2>Hello World, I'm</h2>
        <div className="header">Vignesh Kannaa</div>
        <div className="intro-desc">
          <TypeAnimation
            sequence={['Machine Learning Engineer', 1500, 'Software Developer', 1500]}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  )
}
export default Intro
