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
import Tilt from 'react-parallax-tilt'
import { openOutline, logoGithub } from 'ionicons/icons'
import { useState } from 'react'
import * as projectInfo from '../constants/projectInfo'
import Modal from './Modal'

import './ProjectCardComp.css'

const ProjectCardComp = ({ title }: any) => {
  const [isShown, setIsShown] = useState(false)
  const [projectClicked, setProjectClicked] = useState('')
  const projectData: {
    title: string
    images: string[]
    category: string
    gitUrl: string
    projectUrl?: string
    description: string
    tech: string[]
    details: string
  } = projectInfo[title as keyof typeof projectInfo]

  return (
    <>
      {isShown && <Modal title={projectClicked} closeModal={() => setIsShown(false)} />}
      <IonCol>
        <Tilt className='cardAlign'>
          <IonCard
            className="bg"
            onClick={() => {
              setIsShown(true)
              setProjectClicked(title)
            }}
          >
            <img
              src={require(`../assets/images/${projectData.images[0]}`)}
              alt="project details"
              className="projImg"
            />
            <IonCardHeader>
              <IonRow>
                <IonCol size="9">
                  <IonTitle className="title">{projectData.title}</IonTitle>
                </IonCol>

                <IonCol className="icons">
                  {projectData?.projectUrl && (
                    <a target="_blank" rel="noreferrer" href={projectData.projectUrl}>
                      <IonIcon className="ion-icon-project" icon={openOutline}></IonIcon>
                    </a>
                  )}
                  <a target="_blank" rel="noreferrer" href={projectData.gitUrl}>
                    <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
                  </a>
                </IonCol>
              </IonRow>
              <IonCardSubtitle>
                {projectData.tech.map((item, index) => {
                  return (
                    <IonChip key={index} className="ion-chip ">
                      <img
                        className="techlog"
                        src={require(`../assets/images/techlogos/${item}.svg`)}
                        alt="tech logo"
                      ></img>
                      {item}
                    </IonChip>
                  )
                })}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="content">{projectData.details}</IonCardContent>
          </IonCard>
        </Tilt>
      </IonCol>
    </>
  )
}
export default ProjectCardComp
