import {
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Intro.css";
const Intro = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol size="8">
                  <div className="ion-text-start">Logo</div>
                </IonCol>
                <IonCol size="2" className="ion-text-end">
                  <div>Home</div>
                </IonCol>
                <IonCol size="2" className="ion-text-start">
                  <div>Project</div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle>
          <h3>Hey there!, I'm-</h3>
          <h1 className="heading">Vignesh Kannaa</h1>
          <h3 color="primary">
            Software Engineer. Having Experience and Knowledge in Machine
            Learning
          </h3>
        </IonTitle>
        <IonChip>
          <IonIcon name="logo-github"></IonIcon>GitHub
        </IonChip>
        <IonChip>
          <IonIcon name="logo-linkedin"></IonIcon>LinkedIn
        </IonChip>
        <IonChip>
          <IonIcon name="mail"></IonIcon>Email
        </IonChip>
      </IonContent>
    </IonPage>
  );
};
export default Intro;
