import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import './AboutMe.css'

function AboutMe(){
    return(
        <div>
            <Divider textAlign="left"><h1>ABOUT ME</h1></Divider>
            <Grid container spacing={2}>
                <Grid item xs={8}>   
                </Grid>
                <Grid item xs={4}>
                <img className="image" src={require('../images/vignesh.jpg')}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default AboutMe;