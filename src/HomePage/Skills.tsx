import { IonCard, IonGrid, IonRow, IonCol, IonIcon, IonCardContent } from '@ionic/react'
import {
  logoHtml5,
  logoPython,
  logoReact,
  logoNodejs,
  logoAngular,
  logoJavascript,
} from 'ionicons/icons'
import { FaJava, FaAws, FaBrain } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { GiProcessor } from 'react-icons/gi'
import { IoLogoCss3 } from 'react-icons/io'
import { DiGit } from 'react-icons/di'
import { SiTensorflow, SiTypescript, SiGraphql, SiJson, SiAdobe } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  return (
    <div id="project" className="section_margin">
      <h1>Skills</h1>
      <hr></hr>
      <IonGrid className="section-margin-desc centerItems ">
        <IonRow>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <IonIcon className="contact-ion-icon" icon={logoPython}></IonIcon>
                </div>
                <div>Python</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          {/* <IonCol>
            <IonCard className="cardContent centerflex centerItems">
              <IonCardContent>
                <div >
                   <img src={require('../assets/images/Rlogo.svg')} className="contact-ion-icon" /> 
                </div>
                <div>R</div>
              </IonCardContent>
            </IonCard>
          </IonCol> */}

          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <SiTensorflow className="contact-ion-icon" />
                </div>
                <div>Tensorflow</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <GiProcessor className="contact-ion-icon" />
                </div>
                <div>Machine Learning</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <FaBrain className="contact-ion-icon" />
                </div>
                <div>Deep Learning</div>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <IonIcon className="contact-ion-icon" icon={logoNodejs}></IonIcon>
                </div>
                <div>Node JS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <IonIcon className="contact-ion-icon" icon={logoAngular}></IonIcon>
                </div>
                <div>Angular</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <IonIcon className="contact-ion-icon" icon={logoReact}></IonIcon>
                </div>
                <div>React</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <IonIcon className="contact-ion-icon" icon={logoJavascript}></IonIcon>
                </div>
                <div>Javascript</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <SiTypescript className="contact-ion-icon" />
                </div>
                <div>Typescript</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <FaJava className="contact-ion-icon" />
                </div>
                <div>Java</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <GrMysql className="contact-ion-icon" />
                </div>
                <div>SQL</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex centerflex">
              <IonCardContent>
                <div>
                  <FaAws className="contact-ion-icon" />
                </div>
                <div className="centerItems">AWS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <IonIcon className="contact-ion-icon" icon={logoHtml5}></IonIcon>
                </div>
                <div>HTML</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <IoLogoCss3 className="contact-ion-icon" />
                </div>
                <div>CSS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <DiGit className="contact-ion-icon" />
                </div>
                <div>GIT</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          {/* <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div >
                  <IonIcon className="contact-ion-icon" icon={logoPython}></IonIcon>
                </div>
                <div>REST API</div>
              </IonCardContent>
            </IonCard>
          </IonCol> */}
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <SiGraphql className="contact-ion-icon" />
                </div>
                <div>GraphQL</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <SiAdobe className="contact-ion-icon"/>
                </div>
                <div>AEM</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <SiJson className="contact-ion-icon" />
                </div>
                <div>JSON</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Skills
