import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import { logoGithub, logoGooglePlaystore } from "ionicons/icons";
import "./Project.css";

const Project = () => {
  const gitHub = "https://github.com/vignesh-kannaa";
  const playStoreSpotaround =
    "https://play.google.com/store/apps/details?id=com.spotaround";
  return (
    <div id="project" className="section_margin">
      <h2>Project</h2>
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-md="6">
            <IonCard class="card">
              <img
                src={require("../assets/spotaround.jpg")}
                className="projectImg"
              />
              <div className="card-body">
                <IonCardHeader>
                  <IonGrid>
                    <IonRow className="ion-item-center">
                      <IonCol size="9">
                        <div className="title">
                          Spot Around
                        </div>
                      </IonCol>
                      <IonCol size="3" className="ion-item-center">
                        <a target="_blank" href={gitHub}>
                          <IonIcon
                            className="ion-icon-project"
                            icon={logoGithub}
                          ></IonIcon>
                        </a>
                        <a target="_blank" href={playStoreSpotaround}>
                          <IonIcon
                            className="ion-icon-project"
                            icon={logoGooglePlaystore}
                          ></IonIcon>
                        </a>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonChip className="ion-chip">Java</IonChip>
                      <IonChip className="ion-chip">Angular</IonChip>
                      <IonChip className="ion-chip">Mysql</IonChip>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>
                <IonCardContent className="ion-text-center">
                  {/* <IonButton>Know More</IonButton> */}
                  <div className="content">
                    Search and Hire Neighbourhood professionals at Ease -{" "}
                    <strong>Mobile App</strong> for Android
                  </div>
                </IonCardContent>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
export default Project;
