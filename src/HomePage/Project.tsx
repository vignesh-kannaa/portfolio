import { IonCard, IonChip, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react'
import { logoGithub, logoGooglePlaystore } from 'ionicons/icons'
import './Project.css'

const Project = () => {
  const gitHub = 'https://github.com/vignesh-kannaa'
  const gitHubCreditRiskPredict = gitHub + '/ml-credit_risk_prediction'
  const playStoreSpotaround = 'https://play.google.com/store/apps/details?id=com.spotaround'
  return (
    <div id="project" className="section_margin">
      <h1>Projects</h1>
      <hr></hr>
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="6">
            <IonCard className="card section-margin-desc">
              <img src={require('../assets/images/creditrisk.jpg')} className="projectImg" />
              <div className="card-body">
                <div className="project-margin">
                  <div className="title">Credit Risk Prediction</div>
                  <IonRow className="margin-top">
                    <IonCol size="8">
                      <IonChip className="ion-chip ">Python</IonChip>
                      <IonChip className="ion-chip">Scikit-learn</IonChip>
                    </IonCol>
                    <IonCol size="4">
                      <a target="_blank" href={gitHubCreditRiskPredict}>
                        <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
                      </a>
                    </IonCol>
                  </IonRow>

                  <div className="content">
                    <strong>Machine Learning</strong> Classifier models to predict credit risk
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>
          <IonCol size="12" sizeMd="6">
            <IonCard className="card section-margin-desc">
              <img src={require('../assets/images/spotaround.png')} className="projectImg" />
              <div className="card-body">
                <div className="project-margin">
                  <div className="title">Spot Around</div>
                  <IonRow className="margin-top">
                    <IonCol size="8">
                      <IonChip className="ion-chip ">Java</IonChip>
                      <IonChip className="ion-chip">Angular</IonChip>
                      <IonChip className="ion-chip">Mysql</IonChip>
                    </IonCol>
                    <IonCol size="4">
                      <a target="_blank" href={gitHub}>
                        <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
                      </a>
                      <a target="_blank" href={playStoreSpotaround}>
                        <IonIcon className="ion-icon-project" icon={logoGooglePlaystore}></IonIcon>
                      </a>
                    </IonCol>
                  </IonRow>

                  <div className="content">
                    <strong>Mobile App</strong> that will help to spot local freelancers anywhere
                    and anytime
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Project
