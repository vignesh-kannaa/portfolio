import { IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react'

import './NavBar.css'

const NavBar = () => {
  const cvPdf =
    'https://drive.google.com/file/d/1ACV4eVZm5pfSZeEDY2gRdxPNcx_vmc5o/view?usp=share_link'
  return (
    <IonHeader>
      <IonToolbar className="padding-page">
        <IonTitle>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <img src={require('../assets/images/Logo.png')} />
              </IonCol>
              <IonCol>
                <IonRow>
                  <IonCol>
                    <a href="/portfolio/#about">
                      <h4 className="nav">About</h4>
                    </a>
                  </IonCol>
                  <IonCol className="marright">
                    <a href="/portfolio/#experience">
                      <h4 className="nav">Experience</h4>
                    </a>
                  </IonCol>
                  <IonCol>
                    <a href="/portfolio/#project">
                      <h4 className="nav">Project</h4>
                    </a>
                  </IonCol>
                  <IonCol className="nav">
                    <a href="/portfolio/#contact">
                      <h4 className="nav">Contact</h4>
                    </a>
                  </IonCol>
                  <IonCol className="nav">
                    <a href={cvPdf} target="_blank" download="VigneshKannaa-CV">
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
