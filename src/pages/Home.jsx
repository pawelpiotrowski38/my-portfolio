import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import './home.scss';

export default function Home() {
    return (
        <div className='home'>
            <HeroSection />
            <Skills />
        </div>
    )
}
