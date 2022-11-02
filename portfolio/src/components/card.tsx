
import { cardData } from '../Types/cardType';

const CardComponent=(props:cardData)=>{
    console.log('props:',props.title)
    const title=props.title;
    const description=props.description;
    const tech=props.techstack;
    const url=props.link


    return(
        <div></div>
    )
}
export default CardComponent