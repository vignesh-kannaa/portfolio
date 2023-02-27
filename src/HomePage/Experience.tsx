import {
  IonCol,
  IonGrid,
  IonRow,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useState } from "react";

import "./Experience.css";
const Experience = () => {
  const [segmentValue, setSegmentValue] = useState("enqos");

  const eventtrigger = (event: any) => {
    setSegmentValue(event.detail.value);
  };
  return (
    <div id="experience" className="section_margin">
      <h1>Experience</h1>
      <hr></hr>
      <IonGrid className="bgColor-exp section-margin-desc">
        <IonRow>
          <IonCol size="4" size-md="3">
            <IonSegment value={segmentValue} onIonChange={eventtrigger}>
              <IonSegmentButton value="enqos">
                <h2>Enqos</h2>
              </IonSegmentButton>
              <IonSegmentButton value="hyundai">
                <h2>Hyundai</h2>
              </IonSegmentButton>
              <IonSegmentButton value="sysbiz">
                <h2>Sysbiz</h2>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
          <IonCol>
            <div className="description">
              {segmentValue == "enqos" && (
                <div>
                  <div className="expTitle">Software Development Engineer</div>
                  <div className="expDate">May 2021 - Aug 2022</div>
                  <ul className="expDesc">
                    <li>
                      Worked in an Enterprise-grade Subscription app to enhance
                      the e-commerce platform
                    </li>
                    <li>
                      Integrated the application with payment services like
                      AuthorizeNet and Stripe
                    </li>
                    <li>
                      Automated Decline Recovery process for failed transactions
                      which increased clients' profit by 40%
                    </li>
                    <li>
                      Developed scripts to migrate more than 5k customers from
                      other apps to ours
                    </li>
                    <li>
                      Handled real-time Sales notifications, help clients to
                      expand their business
                    </li>
                    <li>
                      Also developed Gift Messenger app, incorporated messaging
                      services like Twilio
                    </li>
                    <li>
                      Experienced with integrating many third-party APIs and
                      webhooks
                    </li>
                    <li>Supported clients from different time zones</li>
                  </ul>
                </div>
              )}
              {segmentValue == "hyundai" && (
                <div>
                  <div className="expTitle">Associate Software Engineer</div>
                  <div className="expDate">July 2019 - May 2021</div>
                  <ul className="expDesc">
                    <li>Maintained the website using Adobe CMS tool - AEM</li>
                    <li>
                      Developed many reusable components with customisable
                      features
                    </li>
                    <li>
                      Integrated social apps like Instagram for live feeds
                    </li>
                    <li>
                      Involved in creating many campaign pages for the Kia (a
                      subsidiary of Hyundai) Website
                    </li>
                    <li>
                      Worked on an Internal application to sustain employees in
                      the manufacturing plant
                    </li>
                  </ul>
                </div>
              )}
              {segmentValue == "sysbiz" && (
                <div>
                  <div className="expTitle">Trainee Software Engineer</div>
                  <div className="expDate">June 2018 - May 2019</div>
                  <ul className="expDesc">
                    <li>
                      Trained as a Java developer for 3 months with many
                      real-time applications
                    </li>
                    <li>
                      Maintained a medical project to manage timely forecasts,
                      pricing and deduction accruals
                    </li>
                    <li>
                      Worked on Agile Methodology and participated in daily
                      Scrum Meetings, Sprint Planning, Code reviews and Demo
                      Meetings.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
export default Experience;
