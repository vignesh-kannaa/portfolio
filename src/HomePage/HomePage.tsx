import { IonContent, IonPage } from '@ionic/react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Experience from './Experience'
import Intro from './Intro'
import Project from './Project'
import './HomePage.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Skills from './Skills'
import Education from './Education'

const Homepage = () => {
  return (
    <div>
      <IonPage>
        <NavBar></NavBar>
        <IonContent>
          <div className="border">
            <Intro></Intro>
            <Project />
            <Experience />
            <AboutMe />
            <Education />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </IonContent>
      </IonPage>
    </div>
  )
}
export default Homepage
