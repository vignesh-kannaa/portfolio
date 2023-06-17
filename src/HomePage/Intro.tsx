import { IonCol, IonGrid, IonRow } from '@ionic/react'
import RobotCanvas from '../canvas/RobotCanvas'
import './Intro.css'
import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
  return (
    <div id="intro" className="section_margin intro-content">
      <img className="bgImage" src={require('../assets/images/bannerImg.gif')} />
      <div className="herocontent">
        {/* <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="7"> */}
        <h2>Hello World, I'm</h2>
        <div className="header">Vignesh Kannaa</div>
        <div className="intro-desc">
          <TypeAnimation
            sequence={[
              'Machine Learning Engineer',
              1500,
              'Data Scientist',
              1500,
              'Software Developer',
              1500,
            ]}
            repeat={Infinity}
          />
        </div>
        {/* </IonCol>
          <IonCol className="robo" size="12" sizeMd="5">
            <RobotCanvas />
          </IonCol> 
        </IonRow>
      </IonGrid>*/}
      </div>
    </div>
  )
}
export default Intro
