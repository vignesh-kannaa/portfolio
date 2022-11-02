import AboutMe from './AboutMe';
import Contact from './Contact';
import Experience from './Experience';
import Intro from './Intro';
import Work from './Work';
const Homepage=()=>{
    return(
        <div>
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <Work></Work>
            <Contact></Contact>
        </div>
    )
}
export default Homepage;