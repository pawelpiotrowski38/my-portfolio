import Logo from './Logo';
import NavigationItem from './NavigationItem';
import './navigation.scss';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <Logo />
            <ul className='navigation__list'>
                <NavigationItem linkTo={'/about'}>
                    About
                </NavigationItem>
                <NavigationItem linkTo={'/projects'}>
                    Projects
                </NavigationItem>
            </ul>
        </nav>
    )
}
