import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import CardComponent from "../components/card";


function Work(){
    return(
        <div>
            <Divider textAlign="left"><h1>Somethings I've Built</h1></Divider>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardComponent title="Spot Around " description="A mobile application to search and hire neighborhood professionals at ease" link="https://github.com/vignesh-kannaa/SpotAround" techstack={['Angular ','Java ','Mysql ']}></CardComponent>   
                </Grid>
                <Grid item xs={6}>
                
                </Grid>
            </Grid>   
        </div>
    )
}
export default Work;