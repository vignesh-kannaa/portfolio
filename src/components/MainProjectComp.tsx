import { IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonChip } from '@ionic/react'
import { openOutline } from 'ionicons/icons'
import * as projectInfo from '../constants/projectInfo'
import './MainProjectComp.css'

const MainProjectComp = ({ title, format }: any) => {
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

  const isMobile = window.innerWidth <= 601
  const isLeftFormat = format === 'left' || isMobile

  return (
    <div>
      <IonCard className="mainprojcard">
        <IonGrid className="projMargin">
          <IonRow>
            {isLeftFormat ? (
              <>
                <IonCol size="12" sizeMd="6" className="projPad">
                  <div className="projImgContainer">
                    <img
                      className="mainprojImg"
                      src={require(`../assets/images/${projectData.images[0]}`)}
                      alt="project details"
                    />
                  </div>
                </IonCol>
                <IonCol size="12" sizeMd="6" className="projPad">
                  <h1 className="projTitle">{projectData.title}</h1>
                  <div className="projChipMargin">
                    {projectData.tech.map((item, index) => (
                      <IonChip key={index} className="ion-chip ">
                        <img
                          className="techlog"
                          src={require(`../assets/images/techlogos/${item}.svg`)}
                          alt="tech logo"
                        />
                        {item}
                      </IonChip>
                    ))}
                  </div>
                  <div className="projContent">{projectData.description}</div>
                  <IonRow>
                    {projectData.projectUrl && (
                      <IonCol>
                        <a target="_blank" rel="noreferrer" href={projectData.projectUrl}>
                          <IonButton className="projbtn">
                            Live Project
                            <IonIcon className="projopenIcon" icon={openOutline} />
                          </IonButton>
                        </a>
                      </IonCol>
                    )}
                    <IonCol>
                      <a target="_blank" rel="noreferrer" href={projectData.gitUrl}>
                        <IonButton className="projbtn">
                          Github
                          <IonIcon className="projopenIcon" icon={openOutline} />
                        </IonButton>
                      </a>
                    </IonCol>
                  </IonRow>
                </IonCol>
              </>
            ) : (
              <>
                <IonCol size="12" sizeMd="6" className="projPad">
                  <h1 className="projTitle">{projectData.title}</h1>
                  <div className="projChipMargin">
                    {projectData.tech.map((item, index) => (
                      <IonChip key={index} className="ion-chip ">
                        <img
                          className="techlog"
                          src={require(`../assets/images/techlogos/${item}.svg`)}
                          alt="tech logo"
                        />
                        {item}
                      </IonChip>
                    ))}
                  </div>
                  <div className="projContent">{projectData.description}</div>
                  <IonRow>
                    {projectData.projectUrl && (
                      <IonCol>
                        <a target="_blank" rel="noreferrer" href={projectData.projectUrl}>
                          <IonButton className="projbtn">
                            Live Project
                            <IonIcon className="projopenIcon" icon={openOutline} />
                          </IonButton>
                        </a>
                      </IonCol>
                    )}
                    <IonCol>
                      <a target="_blank" rel="noreferrer" href={projectData.gitUrl}>
                        <IonButton className="projbtn">
                          Github
                          <IonIcon className="projopenIcon" icon={openOutline} />
                        </IonButton>
                      </a>
                    </IonCol>
                  </IonRow>
                </IonCol>
                <IonCol size="12" sizeMd="6" className="projPad">
                  <div className="projImgContainer">
                    <img
                      className="mainprojImg"
                      src={require(`../assets/images/${projectData.images[0]}`)}
                      alt="project details"
                    />
                  </div>
                </IonCol>
              </>
            )}
          </IonRow>
        </IonGrid>
      </IonCard>
    </div>
  )
}

export default MainProjectComp
