import { IonCard, IonGrid, IonRow, IonCol, IonCardContent } from '@ionic/react'
import { FaBrain } from 'react-icons/fa'
import { GiProcessor } from 'react-icons/gi'
import { SiAdobe, SiPytorch } from 'react-icons/si'
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      fill="#0277BD"
                      d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                    ></path>
                  </svg>

                  {/* <IonIcon className="contact-ion-icon" icon={logoPython}></IonIcon> */}
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <polygon fill="#ffa000" points="16,39.609 23,43.609 23,4 16,8"></polygon>
                    <polygon fill="#ffa000" points="23,12.433 6,22.25 6,13.75 23,3.933"></polygon>
                    <polygon fill="#ffb300" points="32,39.609 25,43.609 25,4 32,8"></polygon>
                    <polygon fill="#ffb300" points="25,12.433 42,22.25 42,13.75 25,3.933"></polygon>
                    <polygon
                      fill="#ffb300"
                      points="29,19.732 29,27.365 36,31.407 36,23.775"
                    ></polygon>
                  </svg>
                  {/* <SiTensorflow className="contact-ion-icon" /> */}
                </div>
                <div>Tensorflow</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <SiPytorch className="contact-ion-icon" />
                </div>
                <div>Pytorch</div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      fill="#388e3c"
                      d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
                    ></path>
                    <path
                      fill="#37474f"
                      d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
                    ></path>
                    <path
                      fill="#2e7d32"
                      d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                    ></path>
                    <path
                      fill="#37474f"
                      d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
                    ></path>
                  </svg>
                </div>
                <div>Node JS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#bdbdbd"
                      d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"
                    ></path>
                    <path
                      fill="#b71c1c"
                      d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"
                    ></path>
                    <path
                      fill="#dd2c00"
                      d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"
                    ></path>
                    <path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"></path>
                    <path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path>
                    <path fill="#bdbdbd" d="M24 24H30V28H24z"></path>
                    <path fill="#eee" d="M18 24H24V28H18z"></path>
                  </svg>
                  {/* <IonIcon className="contact-ion-icon" icon={logoAngular}></IonIcon> */}
                </div>
                <div>Angular</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  {/* <IonIcon className="contact-ion-icon" icon={logoReact}></IonIcon> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#80deea"
                      d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                    ></path>
                    <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                  </svg>
                </div>
                <div>React</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path
                      fill="#000001"
                      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                    ></path>
                  </svg>
                  {/* <IonIcon className="contact-ion-icon" icon={logoJavascript}></IonIcon> */}
                </div>
                <div>Javascript</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
                    <polygon
                      fill="#fff"
                      points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                    ></polygon>
                    <path
                      fill="#fff"
                      d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                    ></path>
                  </svg>
                  {/* <SiTypescript className="contact-ion-icon" /> */}
                </div>
                <div>Typescript</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#F44336"
                      d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                    ></path>
                    <path
                      fill="#F44336"
                      d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                    ></path>
                    <g>
                      <path
                        fill="#1565C0"
                        d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                      ></path>
                    </g>
                  </svg>
                  {/* <FaJava className="contact-ion-icon" /> */}
                </div>
                <div>Java</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#00796b"
                      d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"
                    ></path>
                    <path
                      fill="#00796b"
                      d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"
                    ></path>
                    <path
                      fill="#f57f17"
                      d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"
                    ></path>
                    <path
                      fill="#f57f17"
                      d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"
                    ></path>
                    <path
                      fill="#f57f17"
                      d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
                    ></path>
                    <path
                      fill="#00796b"
                      d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
                    ></path>
                    <path
                      fill="#00796b"
                      d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
                    ></path>
                  </svg>
                </div>
                <div>SQL</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex centerflex">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0,0,256,256"
                  >
                    <g>
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M13.527,21.529c0,0.597 0.064,1.08 0.176,1.435c0.128,0.355 0.287,0.742 0.511,1.161c0.08,0.129 0.112,0.258 0.112,0.371c0,0.161 -0.096,0.322 -0.303,0.484l-1.006,0.677c-0.144,0.097 -0.287,0.145 -0.415,0.145c-0.16,0 -0.319,-0.081 -0.479,-0.226c-0.224,-0.242 -0.415,-0.5 -0.575,-0.758c-0.16,-0.274 -0.319,-0.58 -0.495,-0.951c-1.245,1.483 -2.81,2.225 -4.694,2.225c-1.341,0 -2.411,-0.387 -3.193,-1.161c-0.782,-0.774 -1.181,-1.806 -1.181,-3.096c0,-1.37 0.479,-2.483 1.453,-3.321c0.974,-0.838 2.267,-1.258 3.911,-1.258c0.543,0 1.102,0.048 1.692,0.129c0.59,0.081 1.197,0.21 1.836,0.355v-1.177c0,-1.225 -0.255,-2.08 -0.75,-2.58c-0.511,-0.5 -1.373,-0.742 -2.602,-0.742c-0.559,0 -1.133,0.064 -1.724,0.21c-0.591,0.145 -1.165,0.322 -1.724,0.548c-0.255,0.113 -0.447,0.177 -0.559,0.21c-0.112,0.032 -0.192,0.048 -0.255,0.048c-0.224,0 -0.335,-0.161 -0.335,-0.5v-0.79c0,-0.258 0.032,-0.451 0.112,-0.564c0.08,-0.113 0.224,-0.226 0.447,-0.339c0.559,-0.29 1.229,-0.532 2.012,-0.726c0.782,-0.21 1.612,-0.306 2.49,-0.306c1.9,0 3.289,0.435 4.183,1.306c0.878,0.871 1.325,2.193 1.325,3.966v5.224h0.03zM7.045,23.979c0.527,0 1.07,-0.097 1.644,-0.29c0.575,-0.193 1.086,-0.548 1.517,-1.032c0.255,-0.306 0.447,-0.645 0.543,-1.032c0.096,-0.387 0.16,-0.855 0.16,-1.403v-0.677c-0.463,-0.113 -0.958,-0.21 -1.469,-0.274c-0.511,-0.064 -1.006,-0.097 -1.501,-0.097c-1.07,0 -1.852,0.21 -2.379,0.645c-0.527,0.435 -0.782,1.048 -0.782,1.854c0,0.758 0.192,1.322 0.591,1.709c0.383,0.404 0.942,0.597 1.676,0.597zM19.865,25.721c-0.287,0 -0.479,-0.048 -0.607,-0.161c-0.128,-0.097 -0.239,-0.322 -0.335,-0.629l-3.752,-12.463c-0.096,-0.322 -0.144,-0.532 -0.144,-0.645c0,-0.258 0.128,-0.403 0.383,-0.403h1.565c0.303,0 0.511,0.048 0.623,0.161c0.128,0.097 0.223,0.322 0.319,0.629l2.682,10.674l2.49,-10.674c0.08,-0.322 0.176,-0.532 0.303,-0.629c0.128,-0.097 0.351,-0.161 0.639,-0.161h1.277c0.303,0 0.511,0.048 0.639,0.161c0.128,0.097 0.239,0.322 0.303,0.629l2.522,10.803l2.762,-10.803c0.096,-0.322 0.208,-0.532 0.319,-0.629c0.128,-0.097 0.335,-0.161 0.623,-0.161h1.485c0.255,0 0.399,0.129 0.399,0.403c0,0.081 -0.016,0.161 -0.032,0.258c-0.016,0.097 -0.048,0.226 -0.112,0.403l-3.847,12.463c-0.096,0.322 -0.208,0.532 -0.335,0.629c-0.127,0.097 -0.335,0.161 -0.607,0.161h-1.373c-0.303,0 -0.511,-0.048 -0.639,-0.161c-0.128,-0.113 -0.239,-0.322 -0.303,-0.645l-2.474,-10.4l-2.458,10.384c-0.08,0.322 -0.176,0.532 -0.303,0.645c-0.128,0.113 -0.351,0.161 -0.639,0.161zM40.379,26.156c-0.83,0 -1.66,-0.097 -2.458,-0.29c-0.798,-0.193 -1.421,-0.403 -1.836,-0.645c-0.255,-0.145 -0.431,-0.306 -0.495,-0.451c-0.064,-0.145 -0.096,-0.306 -0.096,-0.451v-0.822c0,-0.339 0.128,-0.5 0.367,-0.5c0.096,0 0.192,0.016 0.287,0.048c0.096,0.032 0.239,0.097 0.399,0.161c0.543,0.242 1.133,0.435 1.756,0.564c0.639,0.129 1.261,0.193 1.9,0.193c1.006,0 1.788,-0.177 2.331,-0.532c0.543,-0.355 0.83,-0.871 0.83,-1.532c0,-0.451 -0.144,-0.822 -0.431,-1.129c-0.287,-0.306 -0.83,-0.58 -1.612,-0.838l-2.315,-0.726c-1.165,-0.371 -2.027,-0.919 -2.554,-1.645c-0.527,-0.709 -0.798,-1.499 -0.798,-2.338c0,-0.677 0.144,-1.274 0.431,-1.79c0.287,-0.516 0.671,-0.967 1.149,-1.322c0.479,-0.371 1.022,-0.645 1.66,-0.838c0.639,-0.192 1.309,-0.273 2.012,-0.273c0.351,0 0.718,0.016 1.07,0.064c0.367,0.048 0.702,0.113 1.038,0.177c0.319,0.081 0.623,0.161 0.91,0.258c0.287,0.097 0.511,0.193 0.671,0.29c0.224,0.129 0.383,0.258 0.479,0.403c0.096,0.129 0.144,0.306 0.144,0.532v0.758c0,0.339 -0.128,0.516 -0.367,0.516c-0.128,0 -0.335,-0.064 -0.607,-0.193c-0.91,-0.419 -1.932,-0.629 -3.065,-0.629c-0.91,0 -1.628,0.145 -2.123,0.451c-0.495,0.306 -0.75,0.774 -0.75,1.435c0,0.451 0.16,0.838 0.479,1.145c0.319,0.306 0.91,0.613 1.756,0.887l2.267,0.726c1.149,0.371 1.98,0.887 2.474,1.548c0.494,0.661 0.734,1.419 0.734,2.257c0,0.693 -0.144,1.322 -0.415,1.87c-0.287,0.548 -0.671,1.032 -1.165,1.419c-0.495,0.403 -1.086,0.693 -1.772,0.903c-0.721,0.226 -1.471,0.339 -2.285,0.339z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M43.396,33.992c-5.252,3.918 -12.883,5.998 -19.445,5.998c-9.195,0 -17.481,-3.434 -23.739,-9.142c-0.495,-0.451 -0.048,-1.064 0.543,-0.709c6.769,3.966 15.118,6.369 23.755,6.369c5.827,0 12.229,-1.225 18.119,-3.741c0.879,-0.403 1.629,0.58 0.767,1.225zM45.583,31.477c-0.671,-0.871 -4.438,-0.419 -6.146,-0.21c-0.511,0.064 -0.591,-0.387 -0.128,-0.726c3.001,-2.128 7.934,-1.516 8.509,-0.806c0.575,0.726 -0.16,5.708 -2.969,8.094c-0.431,0.371 -0.846,0.177 -0.655,-0.306c0.639,-1.596 2.06,-5.192 1.389,-6.046z"
                          fill="#ff9900"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="centerItems">AWS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                    <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                    <path
                      fill="#FFF"
                      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                    ></path>
                  </svg>
                </div>
                <div>HTML</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                    <path
                      fill="#FFF"
                      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                    ></path>
                  </svg>
                </div>
                <div>CSS</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#F4511E"
                      d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                    ></path>
                  </svg>
                </div>
                <div>GIT</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff4081"
                      d="M24.5,45.161L7,34.82V14.18L24.5,3.839L42,14.18V34.82L24.5,45.161z M9,33.68l15.5,9.159L40,33.68 V15.32L24.5,6.161L9,15.32V33.68z"
                    ></path>
                    <circle cx="24.5" cy="5.5" r="3.5" fill="#ff4081"></circle>
                    <circle cx="24.5" cy="43.5" r="3.5" fill="#ff4081"></circle>
                    <circle cx="8.5" cy="33.5" r="3.5" fill="#ff4081"></circle>
                    <circle cx="40.5" cy="33.5" r="3.5" fill="#ff4081"></circle>
                    <circle cx="8.5" cy="15.5" r="3.5" fill="#ff4081"></circle>
                    <circle cx="40.5" cy="15.5" r="3.5" fill="#ff4081"></circle>
                    <path
                      fill="#ff4081"
                      d="M42.72,35H6.28L24.5,2.978L42.72,35z M9.72,33H39.28L24.5,7.022L9.72,33z"
                    ></path>
                  </svg>
                </div>
                <div>GraphQL</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="cardContent centerflex ">
              <IonCardContent>
                <div>
                  <SiAdobe className="contact-ion-icon" />
                </div>
                <div>AEM</div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}
export default Skills
