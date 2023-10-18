import { IonCardContent } from '@ionic/react'
import './Experiences.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experiences = () => {
  return (
    <div id="experience" className="section_margin">
      <h1>Experiences</h1>
      <hr></hr>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2f2b44', color: '#FFFFFF' }}
          contentArrowStyle={{ borderRight: '7px solid  #2f2b44' }}
          date="May 2021 - Aug 2022"
          iconStyle={{ background: '#ffffff' }}
          icon={<img src={require(`../assets/images/enqos-logo.png`)} alt="enqos logo" />}
        >
          <h3>Software Development Engineer</h3>

          <h4>Enqos</h4>
          <IonCardContent className="content">
            <ul>
              <li>
                Developed an E-commerce platform app that helps clients seamlessly manage product
                subscriptions and maximize recurring payments, resulting in a 30% reduction in
                customer churn.
              </li>
              <li>
                Achieved a remarkable 60% increase in client profit by implementing Automated
                Dunning Management for smooth recovery of failed transactions.
              </li>
              <li>
                Utilized AWS Kinesis for real-time monitoring of financial transactions, effectively
                preventing fraudulent activities and safeguarding against potential losses,
                resulting in a notable 20% reduction in fraudulent incidents.
              </li>
              <li>
                Proficiently managed two additional applications, Sales Notifications and
                Post-Purchase Services, leading to a notable boost in overall sales performance.
              </li>
            </ul>
          </IonCardContent>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2f2b44', color: '#FFFFFF' }}
          contentArrowStyle={{ borderRight: '7px solid  #2f2b44' }}
          date="May 2021 - Aug 2022"
          iconStyle={{ background: '#ffffff' }}
          icon={<img src={require(`../assets/images/hyundai-logo.png`)} alt="hyundai logo" />}
        >
          <h3>Associate Software Engineer</h3>

          <h4>Hyundai</h4>
          <IonCardContent className="content">
            <ul>
              <li>
                Maintained backend development for the Kia website, ensuring smooth online bookings,
                secure payments, and efficient management of model details.
              </li>
              <li>
                Efficiently managed employee finances using an internal application, ensuring timely
                updates for business-related travel and maintaining accurate payment records for
                each employee.
              </li>
              <li>
                Re-architected the employee expense management application by migrating from Angular
                JS to Angular 2, reducing load times by 25% and improving overall system
                responsiveness.
              </li>
            </ul>
          </IonCardContent>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2f2b44', color: '#FFFFFF' }}
          contentArrowStyle={{ borderRight: '7px solid  #2f2b44' }}
          date="June 2018 - May 2019"
          iconStyle={{ background: '#ffffff' }}
          icon={<img src={require(`../assets/images/sysbiz-logo.png`)} alt="sysbiz logo" />}
        >
          <h3>Trainee Software Engineer</h3>

          <h4>Sysbiz technologies</h4>
          <IonCardContent className="content">
            <ul>
              <li>
                Contributed to an agile team effort to enhance sales forecasting, leading to a
                remarkable 30% reduction in forecast errors.
              </li>
              <li>
                Streamlined data integration processes, ensuring seamless data flow between diverse
                sources by developing and maintaining ETL pipelines.
              </li>
            </ul>
          </IonCardContent>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
export default Experiences
