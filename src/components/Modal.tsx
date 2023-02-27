import {
  IonButton,
  IonModal,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonIcon,
  IonSlides,
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import { useState } from 'react'
import * as projectInfo from '../constants/projectInfo'
import './Modal.css'

const Modal = ({ closeModal, title }: any) => {
  const [isOpen, setIsOpen] = useState(true)
  const slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  }
  const projectData = projectInfo[title as keyof typeof projectInfo]
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
              <IonIcon className="modal-ion-icon" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent>
          <IonGrid className='modalMargin'>
            <IonRow>
              <IonCol size="12" sizeMd="6">
                <IonSlides pager options={slideOptsOne}>
                {projectData.images.map(image => (
                  <IonSlide>
                    <img src={require(`../assets/images/${image}`)}/>
                  </IonSlide>
                  ))}
                </IonSlides>
              </IonCol>
              <IonCol size="12" sizeMd="6" className="modalDescription">
                <IonLabel className="modalSubTitle">Project Information</IonLabel>
                <div className="modalContent">
                  <p>
                    Category: &nbsp; {projectData.category}
                  </p>
                  <p>
                    Project Url:
                    <a className="projectUrl" target="_blank" href={projectData.projectUrl}>
                      &nbsp;&nbsp;{projectData.projectUrl}
                    </a>
                  </p>
                </div>
                <br></br>
                <div className="modalSubContent">{projectData.description}</div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </div>
  )
}
export default Modal
