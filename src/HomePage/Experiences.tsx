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
                Drove the rapid development of an enterprise-grade subscription app, significantly
                enhancing the e-commerce platform.
              </li>
              <li>
                Utilised machine learning algorithms to optimize the{' '}
                <span className="impWord">recommendation engine </span>
                for the subscription app, significantly enhancing user engagement and driving
                revenue growth.
              </li>
              <li>
                Maximized clients' profit by 60% by automating the decline recovery process for
                failed transactions, improving efficiency, and reducing losses.
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
                Managed a suite of internal applications to sustain employees in the manufacturing
                plant, improving efficiency and enhancing the employee experience.
              </li>
              <li>
                Expertly refined numerous reusable components with customizable features,
                streamlining the development process and delivering a more flexible and efficient
                platform.
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
                Completed an intensive 3-month training program in Java development, gaining
                hands-on experience with real-time applications and demonstrating exceptional skill
                and expertise.
              </li>
              <li>
                Successfully maintained a medical project focused on managing timely forecasts,
                pricing, and deduction accruals.
              </li>
            </ul>
          </IonCardContent>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
export default Experiences
