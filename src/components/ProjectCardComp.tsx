import {
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonIcon,
  IonRow,
  IonTitle,
} from '@ionic/react'
import { logoGithub } from 'ionicons/icons'
import { useState } from 'react'
import { FaPython } from 'react-icons/fa'
import { SiTensorflow } from 'react-icons/si'
import * as projectInfo from '../constants/projectInfo'
import Modal from './Modal'

import './ProjectCardComp.css'

const ProjectCardComp = ({ title }: any) => {
  const [isShown, setIsShown] = useState(false)
  const [projectClicked, setProjectClicked] = useState('')
  const projectData = projectInfo[title as keyof typeof projectInfo]

  return (
    <>
      {isShown && <Modal title={projectClicked} closeModal={() => setIsShown(false)} />}
      <IonCol>
        <IonCard
          className="bg"
          onClick={() => {
            setIsShown(true)
            setProjectClicked(title)
          }}
        >
          <img src={require(`../assets/images/${projectData.images[0]}`)} className="projImg" />
          <IonCardHeader>
            <IonRow>
              <IonCol size='10'>
                <IonTitle className="title">{projectData.title}</IonTitle>
              </IonCol>
              <IonCol size='2'>
                <a target="_blank" href={projectData.projectUrl}>
                  <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
                </a>
              </IonCol>
            </IonRow>
            <IonCardSubtitle>
              {projectData.tech.map((item, index) => {
                return (
                  <IonChip key={index} className="ion-chip ">
                    {item}
                  </IonChip>
                )
              })}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="content">{projectData.details}</IonCardContent>
        </IonCard>
      </IonCol>
    </>
  )
}
export default ProjectCardComp
