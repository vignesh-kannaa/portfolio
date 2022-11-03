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
import { logoGithub } from "ionicons/icons";

const Project = () => {
  const gitHub = "https://github.com/vignesh-kannaa";
  return (
    <div id="project">
      <h2>Project</h2>
      <IonGrid>
        <IonRow>
          <IonCol size="4">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Spot Around</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Search and Hire Neighbourhood professionals at Ease.
              </IonCardContent>
              <a target="_blank" href={gitHub}>
                <IonIcon
                  className="ion-padding ion-icon-project"
                  icon={logoGithub}
                ></IonIcon>
              </a>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
export default Project;
