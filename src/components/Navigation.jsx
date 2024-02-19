import Logo from './Logo';
import NavigationItem from './NavigationItem';
import ThemeSwitch from './ThemeSwitch';
import './navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <Logo />
            <div className='navigation__container'>
                <ThemeSwitch />
                <ul className='navigation__list'>
                    {/* <NavigationItem linkTo={'/about'}>
                        About
                    </NavigationItem> */}
                    <NavigationItem linkTo={'/projects'}>
                        Projects
                    </NavigationItem>
                </ul>
            </div>
        </nav>
    )
}
