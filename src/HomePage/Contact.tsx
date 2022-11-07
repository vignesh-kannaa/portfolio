import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import {
  logoGithub,
  logoLinkedin,
  mailOutline,
  callOutline,
  logoInstagram,
  logoWhatsapp,
} from "ionicons/icons";
import "./Contact.css";

const Contact = () => {
  const gitHub = "https://github.com/vignesh-kannaa";
  const linkedIn = "https://www.linkedin.com/in/vignesh-kannaa/";
  const mail = "mailto:vigneshkannaa1996@gmail.com";
  const call = "tel:+447774145047";
  const instagram = "https://instagram.com/__kannaa_?igshid=YmMyMTA2M2Y=";
  const whatsApp = "https://wa.me/qr/Q33SLQKPFW2RP1";
  return (
    <div id="contact" className="section_margin">
      <h1>Keep in Touch</h1>
      <hr></hr>
      <IonGrid className="section-margin-desc">
        <IonRow>
          <IonCol>
            <a target="_blank" href={gitHub}>
              <IonButton>
                <IonIcon
                  className="contact-ion-icon"
                  icon={logoGithub}
                ></IonIcon>
                Github
              </IonButton>
            </a>
          </IonCol>
          <IonCol>
            <a target="_blank" href={mail}>
              <IonButton>
                <IonIcon
                  className="contact-ion-icon"
                  icon={mailOutline}
                ></IonIcon>
                Mail
              </IonButton>
            </a>
          </IonCol>
          <IonCol>
            <a target="_blank" href={linkedIn}>
              <IonButton>
                <IonIcon
                  className="contact-ion-icon"
                  icon={logoLinkedin}
                ></IonIcon>
                LinkedIn
              </IonButton>
            </a>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <a target="_blank" href={call}>
              <IonButton>
                <IonIcon
                  className="contact-ion-icon"
                  icon={callOutline}
                ></IonIcon>
                Phone
              </IonButton>
            </a>
          </IonCol>
          <IonCol>
            <a target="_blank" href={instagram}>
              <IonButton>
                <IonIcon
                  className="contact-ion-icon"
                  icon={logoInstagram}
                ></IonIcon>
                Insta
              </IonButton>
            </a>
          </IonCol>
          <IonCol>
            <a target="_blank" href={whatsApp}>
              <IonButton>
                <IonIcon
                  className="contact-ion-icon"
                  icon={logoWhatsapp}
                ></IonIcon>
                Whatsapp
              </IonButton>
            </a>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
export default Contact;
