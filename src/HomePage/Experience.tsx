import { IonCol, IonGrid, IonRow, IonSegment, IonSegmentButton } from '@ionic/react'
import { useState } from 'react'

import './Experience.css'
const Experience = () => {
  const [segmentValue, setSegmentValue] = useState('enqos')

  const eventtrigger = (event: any) => {
    setSegmentValue(event.detail.value)
  }
  return (
    <div id="experience" className="section_margin">
      <h1>Experience</h1>
      <hr></hr>
      <IonGrid className="bgColor-exp section-margin-desc">
        <IonRow>
          <IonCol size="4" size-md="3" className="mar">
            <IonSegment value={segmentValue} onIonChange={eventtrigger}>
              <IonSegmentButton value="enqos">
                <IonRow className="format-title">
                  <IonCol className="format-logo">
                    <img src={require(`../assets/images/enqos-logo.png`)} />
                  </IonCol>
                  <IonCol>
                    <h2>Enqos</h2>
                  </IonCol>
                </IonRow>
              </IonSegmentButton>
              <IonSegmentButton value="hyundai">
                <IonRow className="format-title">
                  <IonCol className="format-logo">
                    <img src={require(`../assets/images/hyundai-logo.png`)} alt='hyundai logo'/>
                  </IonCol>
                  <IonCol>
                    <h2>Hyundai</h2>
                  </IonCol>
                </IonRow>
              </IonSegmentButton>
              <IonSegmentButton value="sysbiz">
                <IonRow className="format-title">
                  <IonCol className="format-logo">
                    <img src={require(`../assets/images/sysbiz-logo.png`)} />
                  </IonCol>
                  <IonCol>
                    <h2>Sysbiz</h2>
                  </IonCol>
                </IonRow>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
          <IonCol>
            <div className="description">
              {segmentValue == 'enqos' && (
                <div>
                  <div className="expTitle">Software Development Engineer</div>
                  <div className="expDate">May 2021 - Aug 2022</div>
                  <ul className="expDesc">
                    <li>
                      Drove the rapid development of an enterprise-grade subscription app,
                      significantly enhancing the e-commerce platform.
                    </li>
                    <li>
                      Successfully integrated the subscription app with payment services like
                      AuthorizeNet and Stripe, streamlining the payment process and improving user
                      experience.
                    </li>
                    <li>
                      Maximized clients' profit by 40% by automating the decline recovery process
                      for failed transactions, improving efficiency and reducing losses.
                    </li>
                    <li>
                      Expertly developed scripts to seamlessly migrate over 10,000 customers from
                      other apps to our platform, delivering a smooth transition and minimal
                      disruption.
                    </li>
                    <li>Managed real-time sales notifications, resulting in increased revenue.</li>
                    <li>
                      Implemented the Gift Messenger app and incorporated messaging services like
                      Twilio, delivering exceptional value to clients.
                    </li>
                    <li>
                      Integrated numerous third-party APIs and webhooks, ensuring seamless
                      integration with a wide range of tools and services.
                    </li>
                    <li>
                      Provided excellent client support to a diverse range of clients across
                      different time zones.
                    </li>
                  </ul>
                </div>
              )}
              {segmentValue == 'hyundai' && (
                <div>
                  <div className="expTitle">Associate Software Engineer</div>
                  <div className="expDate">July 2019 - May 2021</div>
                  <ul className="expDesc">
                    <li>
                      Maintained and updated the company website using the Adobe CMS tool - AEM,
                      ensuring optimal performance and delivering an exceptional user experience.
                    </li>
                    <li>
                      Expertly refined numerous reusable components with customizable features,
                      streamlining the development process and delivering a more flexible and
                      efficient platform.
                    </li>
                    <li>
                      Successfully integrated social media apps like Instagram for live feeds,
                      enhancing the website's social media presence and driving increased user
                      engagement.
                    </li>
                    <li>
                      Played a key role in creating numerous campaign pages for the Kia (a
                      subsidiary of Hyundai) website, delivering exceptional results.
                    </li>
                    <li>
                      Managed a suite of internal applications to sustain employees in the
                      manufacturing plant, improving efficiency and enhancing the employee
                      experience.
                    </li>
                  </ul>
                </div>
              )}
              {segmentValue == 'sysbiz' && (
                <div>
                  <div className="expTitle">Trainee Software Engineer</div>
                  <div className="expDate">June 2018 - May 2019</div>
                  <ul className="expDesc">
                    <li>
                      Completed an intensive 3-month training program in Java development, gaining
                      hands-on experience with real-time applications and demonstrating exceptional
                      skill and expertise.
                    </li>
                    <li>
                      Successfully maintained a medical project focused on managing timely
                      forecasts, pricing, and deduction accruals.
                    </li>
                    <li>
                      Involved in utilizing Agile methodology on multiple projects, resulting in
                      improved collaboration, flexibility, and timely delivery of high-quality
                      software solutions.
                    </li>
                    <li>
                      Participated in daily Scrum Meetings, Sprint Planning, Code Reviews, and Demo
                      Meetings to drive efficient and effective development processes.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Experience
