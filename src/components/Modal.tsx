import {
  IonButton,
  IonModal,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
} from '@ionic/react'
import { openOutline, closeOutline } from 'ionicons/icons'
import { useState } from 'react'
import * as projectInfo from '../constants/projectInfo'
import './Modal.css'

const Modal = ({ closeModal, title }: any) => {
  const [isOpen, setIsOpen] = useState(true)

  const projectData = projectInfo[title as keyof typeof projectInfo]
  // console.log('project info:', projectInfo)
  // const projectList = Object.entries(projectInfo).map(([key, value]) => ({ key, value }))

  // for (let i = 0; i < projectList.length; i++) {
  //   console.log(projectList)
  //   const project = projectList[i]
  //   if (project.value['title'] === projectData.title) {
  //     console.log(`The index of the project is ${i}.`)
  //   }
  // }
  return (
    <div>
      <IonModal
        isOpen={isOpen}
        onDidDismiss={() => {
          closeModal()
        }}
      >
        <IonToolbar>
          <IonTitle className="modalTitle">{projectData.title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>
              <IonIcon className="modalCloseIcon" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent>
          <IonGrid className="modalMargin">
            <IonRow>
              <div className="modelImgContainer">
                <img
                  className="modelImg"
                  src={require(`../assets/images/${projectData.images[0]}`)}
                  alt="project details"
                />
              </div>
              <div className="modalContent">{projectData.description}</div>
              <div>
                <a target="_blank" rel="noreferrer" href={projectData.projectUrl}>
                  <IonButton className="modalbtn">
                    View In Github
                    <IonIcon className="openIcon" icon={openOutline}></IonIcon>
                  </IonButton>
                </a>
              </div>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </div>
  )
}
export default Modal
