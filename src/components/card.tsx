import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from "@mui/material/Link";
import { cardData } from '../Types/cardType';
import { CardActionArea, Chip, Typography } from '@mui/material';

function CardComponent(props:cardData){
    console.log('props:',props.title)
    const title=props.title;
    const description=props.description;
    const tech=props.techstack;
    const url=props.link


    return(
        <Link href={url} target="_blank" underline="none">
            <Card>
            <CardActionArea>
                <CardContent>  
                    <Typography gutterBottom variant="h5" component="div">
                    {title} 
                    </Typography>
                    &nbsp;
                    <Typography variant="h6" color="text.secondary">
                    {description}
                     </Typography>
                     &nbsp;
                     <Typography variant="body1" color="text.secondary">
                    {tech}
                    </Typography>
                 </CardContent>
            </CardActionArea>
            </Card>
        </Link>
    )
}
export default CardComponent