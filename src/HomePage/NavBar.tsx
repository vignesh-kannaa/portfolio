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
  return (
    <IonHeader translucent={true} className="border-format">
      <IonToolbar>
        <IonTitle>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <div className="ion-text-start">
                  <IonIcon className="ion-icon-intro" icon={paw}></IonIcon>
                </div>
              </IonCol>
              <IonCol size="2" className="ion-text-end">
                <a href="#home">
                  <h3>Home</h3>
                </a>
              </IonCol>
              <IonCol size="2" className="ion-text-end">
                <a href="#project">
                  <h3>Project</h3>
                </a>
              </IonCol>
              <IonCol size="2" className="ion-text-end">
              <a href="#contact"><h3>Contact</h3></a>
              </IonCol>
              <IonCol size="2" className="ion-text-end">
                <a
                  href="../assets/VigneshKannaa-CV.pdf"
                  download="VigneshKannaa-CV.pdf"
                >
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
