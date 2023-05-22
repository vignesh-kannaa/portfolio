import { IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react'

import './NavBar.css'

const NavBar = () => {
  const cvPdf =
    'https://drive.google.com/file/d/10fwh1Ulm2V_FvSM6K1npKpPGorlZx1x0/view?usp=share_link'
  return (
    <IonHeader>
      <IonToolbar className="padding-page">
        <IonTitle>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <a href="/portfolio/#intro">
                  <img src={require('../assets/images/Logo.png')} />
                </a>
              </IonCol>
              <IonCol>
                <IonRow>
                  <IonCol>
                    <a href="/portfolio/#project">
                      <h4 className="nav">Project</h4>
                    </a>
                  </IonCol>
                  <IonCol className="marright">
                    <a href="/portfolio/#experience">
                      <h4 className="nav">Experience</h4>
                    </a>
                  </IonCol>

                  <IonCol>
                    <a href="/portfolio/#about">
                      <h4 className="nav">About</h4>
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
