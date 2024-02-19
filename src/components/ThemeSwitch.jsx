import { PiSun } from "react-icons/pi";
import { IoIosMoon } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";
import './themeSwitch.scss';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='theme-switch' onClick={toggleTheme}>
            {theme === 'light' && (
                <PiSun />
            )}
            {theme === 'dark' && (
                <IoIosMoon />
            )}
        </div>
    )
}
