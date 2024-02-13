import Logo from './Logo';
import NavigationItem from './NavigationItem';
import './navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <Logo />
            <ul className='navigation__list'>
                <NavigationItem>
                    About
                </NavigationItem>
                <NavigationItem>
                    Projects
                </NavigationItem>
            </ul>
        </nav>
    )
}
