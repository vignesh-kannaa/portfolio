import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonTitle,
} from '@ionic/react'
import { logoGithub, logoGooglePlaystore } from 'ionicons/icons'
import { useState } from 'react'
import { FaJava ,FaPython,FaAngular} from "react-icons/fa";
import { GrMysql} from "react-icons/gr";
import Modal from '../components/Modal'

import './Project.css'

const Project = () => {
  const [isShown, setIsShown] = useState(false)
  const [projectClicked, setProjectClicked] = useState('')

  const gitHub = 'https://github.com/vignesh-kannaa'
  const gitHubCreditRiskPredict = gitHub + '/ml-credit_risk_prediction'
  const gitHubUnsupuervisedLearning = gitHub + '/ml-unsupervised-customer-segmentation'
  const playStoreSpotaround = 'https://play.google.com/store/apps/details?id=com.spotaround'
  return (
    <div id="project" className="section_margin">
      <h1>Projects</h1>
      <hr></hr>
      <IonGrid>
        {isShown && <Modal title={projectClicked} closeModal={() => setIsShown(false)} />}
        <IonRow>
          <IonCol size="12" sizeMd="6">
            <IonCard
              className="bg section-margin-desc"
              onClick={() => {
                setIsShown(true)
                setProjectClicked('customerSegmentation')
              }}
            >
              <img src={require('../assets/images/customerSegmentation.jpeg')} />
              <IonCardHeader>
                <IonRow>
                  <IonTitle className="title">Customer Segmentation</IonTitle>
                  <a target="_blank" href={gitHubUnsupuervisedLearning}>
                    <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
                  </a>
                </IonRow>
                <IonCardSubtitle>
                  <IonChip className="ion-chip ">
                  <FaPython className='chipIcon'/> Python
                  </IonChip>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className="content">
                Unsupervised Machine learning models for customer segmentation using mall customer
                data
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="12" sizeMd="6">
            <IonCard
              className="bg mar-positive"
              onClick={() => {
                setIsShown(true)
                setProjectClicked('creditRiskPrediction')
              }}
            >
              <img src={require('../assets/images/creditrisk.jpg')} />
              <IonCardHeader>
                <IonRow>
                  <IonTitle className="title">Credit Risk Prediction</IonTitle>
                  <a target="_blank" href={gitHubCreditRiskPredict}>
                    <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
                  </a>
                </IonRow>
                <IonCardSubtitle>
                  <IonChip className="ion-chip ">
                  <FaPython className='chipIcon'/> Python
                  </IonChip>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className="content">
                Supervised Machine Learning Classifier models to predict credit risk
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" sizeMd="6">
            <IonCard
              className="bg mar-negative"
              onClick={() => {
                setIsShown(true)
                setProjectClicked('spotAround')
              }}
            >
              <img src={require('../assets/images/spotaround.png')} />
              <IonCardHeader>
                <IonRow>
                  <IonTitle className="title">Spot Around</IonTitle>
                  <a target="_blank" href={gitHub}>
                    <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
                  </a>
                  <a target="_blank" href={playStoreSpotaround}>
                    <IonIcon className="ion-icon-project" icon={logoGooglePlaystore}></IonIcon>
                  </a>
                </IonRow>
                <IonCardSubtitle>
                  <IonChip className="ion-chip ">
                    <FaJava className='chipIcon'/>
                    Java
                  </IonChip>
                  <IonChip className="ion-chip">
                    <FaAngular className='chipIcon'/>Angular
                  </IonChip>
                  <IonChip className="ion-chip">
                  <GrMysql  className='chipIcon'/>
                  Mysql</IonChip>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className="content">
                Mobile App that will help to spot local freelancers anywhere
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      {/* <IonGrid>
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
      </IonGrid> */}
    </div>
  )
}
export default Project
