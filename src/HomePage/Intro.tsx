import './Intro.css'
import { IonIcon } from '@ionic/react'
import { logoGithub, logoLinkedin } from 'ionicons/icons'
import { SiLeetcode } from 'react-icons/si'

const Intro = () => {
  return (
    <div id="intro" className="section_margin intro-content">
      <img className="bgImage" src={require('../assets/images/bannerImg.gif')} alt="hi" />
      <div className="herocontent">
        {/* <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="7"> */}
        <h2>Hello World, I'm</h2>
        <div className="header">Vignesh Kannaa</div>
        <div className="intro-desc">
          MSc graduate in <span className="impWord">Artificial Intelligence</span> with 4 years of
          <span className="impWord"> Software Development experience.</span>
        </div>
        {/* </IonCol>
          <IonCol className="robo" size="12" sizeMd="5">
            <RobotCanvas />
          </IonCol> 
        </IonRow>
      </IonGrid>*/}
        <div>
          <a target="_blank" rel="noreferrer" href="https://leetcode.com/vigneshkannaa">
            <SiLeetcode className="contact-ion-icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/vignesh-kannaa">
            <IonIcon className="contact-ion-icon" icon={logoGithub}></IonIcon>
          </a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/vignesh-kannaa">
            <IonIcon className="contact-ion-icon" icon={logoLinkedin}></IonIcon>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Intro
