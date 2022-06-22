import './styles.scss'
import FacebookLogo from './icon/facebook.svg';
import InstagramLogo from './icon/instagram.svg';

export function Footer(){
    return(
        <footer>
            <a href="https://pt-pt.facebook.com/decathlonportugal/" target='_blank' rel='noreferrer'><img className='social' src={FacebookLogo} alt="Facebook Logo" /></a>
            <a href="https://www.instagram.com/decathlonportugal/" target='_blank' rel='noreferrer'><img className='social' src={InstagramLogo} alt="Instagram Logo" /></a>
        </footer>
    )
}