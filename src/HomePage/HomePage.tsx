import { IonContent, IonPage } from "@ionic/react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Intro from "./Intro";
import Project from "./Project";
import "./HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <IonContent fullscreen={true}>
        <div className="border">
          <Intro></Intro>
          <AboutMe></AboutMe>
          <Project></Project>
          <Experience></Experience>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </IonContent>
    </div>
  );
};
export default Homepage;
