import { IonCard, IonChip, IonIcon, IonRow } from "@ionic/react";
import { logoGithub, logoGooglePlaystore } from "ionicons/icons";
import "./Project.css";

const Project = () => {
  const gitHub = "https://github.com/vignesh-kannaa";
  const playStoreSpotaround =
    "https://play.google.com/store/apps/details?id=com.spotaround";
  return (
    <div id="project" className="section_margin">
      <h1>Projects</h1>
      <hr></hr>
      <IonCard className="card section-margin-desc">
        <img
          src={require("../assets/images/spotaround.png")}
          className="projectImg"
        />
        <div className="card-body">
          <div className="project-margin">
            <div className="title">Spot Around</div>
            <div className="content">
              <strong>Mobile App</strong> that will help to spot local
              freelancers anywhere and anytime
            </div>
            <IonRow className="margin-top">
              <IonChip className="ion-chip ">Java</IonChip>
              <IonChip className="ion-chip">Angular</IonChip>
              <IonChip className="ion-chip">Mysql</IonChip>
            </IonRow>
            <a target="_blank" href={gitHub}>
              <IonIcon className="ion-icon-project" icon={logoGithub}></IonIcon>
            </a>
            <a target="_blank" href={playStoreSpotaround}>
              <IonIcon
                className="ion-icon-project"
                icon={logoGooglePlaystore}
              ></IonIcon>
            </a>
          </div>
        </div>
      </IonCard>
    </div>
  );
};
export default Project;
