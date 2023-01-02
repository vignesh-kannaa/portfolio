import { IonContent, IonPage } from "@ionic/react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Intro from "./Intro";
import Project from "./Project";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Skills from "./Skills";

const Homepage = () => {
  return (
    <div>
      <IonPage>
        <NavBar></NavBar>
        <IonContent>
          <div className="border">
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <Project></Project>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};
export default Homepage;
