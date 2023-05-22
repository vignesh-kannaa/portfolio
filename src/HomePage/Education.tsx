import { IonCol, IonGrid, IonRow } from '@ionic/react'
import './Education.css'

const Education = () => {
  return (
    <div id="education" className="section_margin">
      <h1>Education</h1>
      <hr></hr>

      <IonGrid className="section_margin">
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h4>2023</h4>
              <h3>Masters in Artificial Intelligence</h3>
              <p>
                <i>Aston University</i>
              </p>
              <p>
                <i>Birmingham, United Kingdom</i>
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h4>2018</h4>
              <h3>Bachelors in Engineering</h3>
              <p>
                <i>CEG - Anna University</i>
              </p>
              <p>
                <i>Chennai, India</i>
              </p>
            </div>
          </div>
        </div>
        {/*
          <IonRow className="margin">
           <IonCol size="4" size-md="3">
            <h3>2023</h3>
          </IonCol>
          <IonCol>
            <h4>
              <IonRow>Masters in Artificial Intelligence</IonRow>
              <IonRow>
                <i>Aston University</i>
              </IonRow>
              <IonRow>
                <i>Birmingham, United Kingdom</i>
              </IonRow>
            </h4>
          </IonCol> 
        </IonRow>
        <IonRow className="margin">
          {/* <IonCol size="4" size-md="3">
            <h3>2018</h3>
          </IonCol>
          <IonCol>
            <h4>
              <IonRow>Bachelors in Engineering</IonRow>
              <IonRow>
                <i>CEG - Anna University</i>
              </IonRow>
              <IonRow>
                <i>Chennai, India</i>
              </IonRow>
            </h4>
          </IonCol>
        </IonRow> */}
      </IonGrid>
    </div>
  )
}
export default Education
