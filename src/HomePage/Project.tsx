import { IonGrid, IonRow } from '@ionic/react'
import ProjectCardComp from '../components/ProjectCardComp'

import './Project.css'

const Project = () => {
  return (
    <div id="project" className="section_margin">
      <h1>Projects</h1>
      <hr></hr>
      <IonGrid>
        <IonRow>
          <ProjectCardComp title="churnPrediction"></ProjectCardComp>
          <ProjectCardComp title="sentimentAnalysis"></ProjectCardComp>
          <ProjectCardComp title="animePrediction"></ProjectCardComp>
          <ProjectCardComp title="navbot"></ProjectCardComp>
          <ProjectCardComp title="financialComplaintPowerbi"></ProjectCardComp>
          <ProjectCardComp title="ObjectDetection"></ProjectCardComp>
          <ProjectCardComp title="customerSegmentation"></ProjectCardComp>
          <ProjectCardComp title="diabetesPrediction"></ProjectCardComp>
          <ProjectCardComp title="spotAround"></ProjectCardComp>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Project
