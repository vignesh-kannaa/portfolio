import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { paw } from "ionicons/icons";
import "./NavBar.css";

const NavBar = () => {
  const cvPdf =
    "https://drive.google.com/file/d/1i9l-rbxGuDyEZxNMnkq7zUgkR7H39Hb5/view?usp=share_link";
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <IonGrid>
            <IonRow>
              <IonCol size="4" className="border-format">
                <div className="ion-text-start">
                  <IonIcon className="ion-icon-intro" icon={paw}></IonIcon>
                </div>
              </IonCol>
              <IonCol size="2" className="ion-text-end">
                <a href="/portfolio/#home">
                  <h3>Home</h3>
                </a>
              </IonCol>
              <IonCol size="2" className="ion-text-end">
                <a href="/portfolio/#project">
                  <h3>Project</h3>
                </a>
              </IonCol>
              <IonCol size="2" className="ion-text-end">
                <a href="/portfolio/#contact">
                  <h3>Contact</h3>
                </a>
              </IonCol>
              <IonCol size="2" className="ion-text-end border-format">
                <a href={cvPdf} target="_blank" download="VigneshKannaa-CV">
                  <h3>CV</h3>
                </a>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default NavBar;
