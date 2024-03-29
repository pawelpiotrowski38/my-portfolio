import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { FaSass } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { RiSupabaseLine } from 'react-icons/ri';
import { FaGitAlt } from 'react-icons/fa';
import SkillsItem from './SkillsItem';
import './skills.scss';

export const skills = [{
        id: 4562,
        component: <IoLogoJavascript />,
    }, {
        id: 5792,
        component: <FaReact />,
    }, {
        id: 1207,
        component: <FaNodeJs />,
    }, {
        id: 9123,
        component: <IoLogoCss3 />,
    }, {
        id: 2245,
        component: <FaSass />,
    }, {
        id: 1204,
        component: <SiPostgresql />,
    }, {
        id: 6913,
        component: <RiSupabaseLine />,
    }, {
        id: 3103,
        component: <FaGitAlt />,
    },
];

export default function Skills() {
    return (
        <section className='skills'>
            <ul className='skills__list'>
                {skills.map((skill) => (
                    <SkillsItem key={skill.id}>
                        {skill.component}
                    </SkillsItem>
                ))}
            </ul>
        </section>
    )
}
