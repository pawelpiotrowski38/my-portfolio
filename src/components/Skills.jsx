import { skills } from "../data/constants";
import SkillsItem from "./SkillsItem";
import './skills.scss';

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
