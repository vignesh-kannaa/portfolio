import { IonIcon } from "@ionic/react";
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
    <div id="contact" className="ion-text-center">
      <h2>Keep in Touch</h2>
      <a target="_blank" href={gitHub}>
        <IonIcon icon={logoGithub}></IonIcon>
      </a>
      <a target="_blank" href={linkedIn}>
        <IonIcon icon={logoLinkedin}></IonIcon>
      </a>
      <a target="_blank" href={mail}>
        <IonIcon icon={mailOutline}></IonIcon>
      </a>
      <a target="_blank" href={call}>
        <IonIcon icon={callOutline}></IonIcon>
      </a>
      <a target="_blank" href={instagram}>
        <IonIcon icon={logoInstagram}></IonIcon>
      </a>
      <a target="_blank" href={whatsApp}>
        <IonIcon icon={logoWhatsapp}></IonIcon>
      </a>
    </div>
  );
};
export default Contact;
