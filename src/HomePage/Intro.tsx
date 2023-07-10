import './Intro.css'

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
          <span className="impWord"> Software experience.</span>
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
