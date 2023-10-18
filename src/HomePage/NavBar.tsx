import { IonCol, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/react'

import './NavBar.css'
import { useEffect, useRef, useState } from 'react'

const NavBar = () => {
  const cvPdf =
    'https://drive.google.com/file/d/1oyzLf-BLv5TTqQJkBE3YjgVzzx0uQs3R/view?usp=share_link'
  const [selectedSection, setSelectedSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }

    const handleIntersect = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id)
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions)
    const sections = document.querySelectorAll('div.section_margin')
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setSelectedSection(id)
    }
  }
  return (
    <IonHeader className="navheader">
      <IonToolbar>
        <IonTitle className="navformat">
          <IonGrid>
            <IonRow>
              <IonCol size="6" className="logoalign">
                <a href="/portfolio/#intro" rel="noreferrer">
                  <img
                    className="logoimage"
                    src={require('../assets/images/Logo.png')}
                    alt="logo "
                  />
                </a>
              </IonCol>
              <IonCol className="navbar">
                <IonRow>
                  <IonCol>
                    <h4
                      onClick={() => scrollToSection('about')}
                      className={`nav ${selectedSection === 'about' ? 'selected' : ''}`}
                    >
                      About
                    </h4>
                  </IonCol>
                  <IonCol className="marright">
                    <h4
                      className={`nav ${selectedSection === 'experience' ? 'selected' : ''}`}
                      onClick={() => scrollToSection('experience')}
                    >
                      Experience
                    </h4>
                  </IonCol>
                  <IonCol>
                    <h4
                      onClick={() => scrollToSection('project')}
                      className={`nav ${selectedSection === 'project' ? 'selected' : ''}`}
                    >
                      Project
                    </h4>
                  </IonCol>
                  <IonCol>
                    <h4
                      onClick={() => scrollToSection('contact')}
                      className={`nav ${selectedSection === 'contact' ? 'selected' : ''}`}
                    >
                      Contact
                    </h4>
                  </IonCol>
                  <IonCol>
                    <a href={cvPdf} target="_blank" rel="noreferrer" download="VigneshKannaa-CV">
                      <h4 className="nav">CV</h4>
                    </a>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}
export default NavBar
