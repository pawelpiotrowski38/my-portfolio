import { Link } from 'react-router-dom';
import './navigationItem.scss';

export default function NavigationItem({ linkTo, children }) {
    return (
        <li className='navigation-item'>
            <Link className='navigation-item__link' to={linkTo}>
                {children}
            </Link>
        </li>
    )
}
