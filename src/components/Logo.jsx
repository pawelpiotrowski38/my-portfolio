import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import './logo.scss';

export default function Logo() {
    return (
        <div className='logo'>
            <Link className='logo__link' to={'/'}>
                <IoHome />
            </Link>
        </div>
    )
}
