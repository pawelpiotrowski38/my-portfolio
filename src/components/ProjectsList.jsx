import { projects } from '../data/constants';
import ProjectsListItem from './ProjectsListItem';
import './projectsList.scss';

export default function ProjectsList() {
    return (
        <ul className='projects-list'>
            {projects.map((project) => (
                <ProjectsListItem
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    )
}