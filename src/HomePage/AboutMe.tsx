import { IonCol, IonContent, IonGrid, IonHeader, IonRow } from "@ionic/react";
import { IonAvatar } from "@ionic/react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <IonGrid>
        <h2>About Me!</h2>
        <IonRow>
          <IonCol size="6">
            <h4>
              I'm currently pursuing my master's in{" "}
              <strong>Artificial Intelligence</strong> at{" "}
              <a href="https://www.aston.ac.uk/" target="_blank">
                <strong>Aston University</strong>
              </a>
              , Birmingham.
              <br />
              <br />
              Possesses 4+ years of Software experience working in large and
              small organisations across a range of sectors, including Finance,
              E-commerce, Marketing, Medical and Industrial. Experienced working
              in both Waterfall and Agile development environments.
            </h4>
          </IonCol>
          <IonCol size="6">
            <IonAvatar className="image ion-text-center">
              <img src={require("../assets/vignesh.jpg")} />
            </IonAvatar>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
export default AboutMe;
