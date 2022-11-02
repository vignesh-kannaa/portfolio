import './Contact.css'
import Divider from "@mui/material/Divider";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "@mui/material/Link";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


function Contact(){
    return(
        <div>
            <Divider textAlign="left"><h1>Get in Touch</h1></Divider>
            <div className='centerAlign'>
                <Link href="https://github.com/vignesh-kannaa" target="_blank" underline="none"><GitHubIcon className='Icon' fontSize="large"/></Link>
                <Link href="https://www.linkedin.com/in/vignesh-kannaa" target="_blank" underline="none"><LinkedInIcon className='Icon' fontSize="large"/></Link>
                <Link href="https://www.instagram.com/vignesh-kannaa" target="_blank" underline="none"><InstagramIcon className='Icon' fontSize="large"/></Link>
            </div>
            
        </div>
    )
}
export default Contact;