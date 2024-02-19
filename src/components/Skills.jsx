import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { FaSass } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import SkillsItem from './SkillsItem';
import './skills.scss';

export const skills = [{
        id: 1,
        component: <IoLogoJavascript />,
    }, {
        id: 2,
        component: <FaReact />,
    }, {
        id: 3,
        component: <FaNodeJs />,
    }, {
        id: 4,
        component: <IoLogoCss3 />,
    }, {
        id: 5,
        component: <FaSass />,
    }, {
        id: 6,
        component: <SiPostgresql />,
    }, {
        id: 7,
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
