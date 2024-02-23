import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import './footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__contact'>
                    <h2 className='footer__header'>
                        Contact Me
                    </h2>
                    <div className='footer__mail-container'>
                        <IoMail />
                        <Link to={'mailto:pawel.piotrowski38@gmail.com'} className='footer__mail'>
                            pawel.piotrowski38@gmail.com
                        </Link>
                    </div>
                </div>
                <ul className='footer__icons'>
                    <li className='footer__icon'>
                        <Link to={'https://github.com/pawelpiotrowski38'} target='_blank'>
                            <FaGithub />
                        </Link>
                    </li>
                    <li className='footer__icon'>
                        <Link to={'https://www.frontendmentor.io/profile/pawelpiotrowski38'} target='_blank'>
                            <SiFrontendmentor />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
