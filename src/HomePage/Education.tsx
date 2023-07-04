import './Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Education = () => {
  return (
    <div id="education" className="section_margin">
      <h1>Education</h1>
      <hr></hr>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2f2b44', color: '#FFFFFF' }}
          contentArrowStyle={{ borderRight: '7px solid  #2f2b44' }}
          date="2023"
          iconStyle={{ background: '#ffffff' }}
          icon={<img src={require(`../assets/images/aston-logo.png`)} alt="aston logo" />}
        >
          <h3>Masters in Artificial Intelligence</h3>

          <h4>Aston University</h4>
          <p>
            <i>Birmingham, United Kingdom</i>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2f2b44', color: '#FFFFFF' }}
          contentArrowStyle={{ borderRight: '7px solid  #2f2b44' }}
          date="2018"
          iconStyle={{ background: '#ffffff' }}
          icon={
            <img
              src={require(`../assets/images/annauniversity-logo.png`)}
              alt="anna university logo"
            />
          }
        >
          <h3>Bachelors in Engineering</h3>

          <h4>CEG - Anna University</h4>
          <p>
            <i>Chennai, India</i>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
export default Education
