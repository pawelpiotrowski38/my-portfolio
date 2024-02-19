import { Link } from "react-router-dom";
import { personalData } from "../data/constants";
import './heroSection.scss';

export default function HeroSection() {
    return (
        <section className='hero-section'>
            <h1 className='hero-section__header'>
                Hello!<br></br>I am <span className='hero-section__name'>{personalData.name}</span>
            </h1>
            <p className='hero-section__paragraph'>
                {personalData.description}
            </p>
            <Link to={'/projects'} className='hero-section__link'>
                See projects
            </Link>
        </section>
    )
}