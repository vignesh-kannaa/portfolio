import { IonCol, IonGrid, IonRow } from '@ionic/react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div id="about" className="section_margin">
      <h1>About Me</h1>
      <hr></hr>
      <IonGrid>
        <IonRow className="section-margin-desc">
          <IonCol size="12" sizeMd="6">
            <h4 className="aboutme">
              Unlocking Business Potential with Data and AI Innovation. Experienced in tackling
              complex problems and delivering innovative solutions. Skilled in algorithms,
              statistical analysis, and data modelling
              <br />
              <br />
              Possesses <span className="impWord">4+ years</span> of Software experience working in
              large and small organisations across a range of sectors, including Finance,
              E-commerce, Marketing, Medical and Industrial. Experienced working in both Waterfall
              and Agile development environments.
            </h4>
          </IonCol>
          <IonCol size="12" sizeMd="6">
            <div className="ion-text-center">
              <img
                className="image"
                src={require('../assets/images/vignesh.jpg')}
                alt="vignesh kanna"
              />
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default AboutMe
