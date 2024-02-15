import Button from "./Button";
import './heroSection.scss';

export default function HeroSection() {
    return (
        <section className='hero-section'>
            <h1 className='hero-section__header'>
                Hello!<br></br>I am <span className='hero-section__name'>Paweł Piotrowski</span>
            </h1>
            <p className='hero-section__paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus leo, condimentum nec lobortis non, interdum at ex. Donec id pulvinar eros. Cras quis scelerisque ex.
            </p>
            <Button clickHandler={null}>
                See projects
            </Button>
        </section>
    )
}