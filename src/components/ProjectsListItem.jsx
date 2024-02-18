import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import './projectsListItem.scss';

export default function ProjectsListItem({ project }) {
    console.log(project.imageSource);
    return (
        <li className='projects-list-item'>
            <div className='projects-list-item__image-container'>
                <img
                    className='projects-list-item__image'
                    src={`images/${project.imageSource}`}
                    alt={project.name}
                />
            </div>
            <div className='projects-list-item__info-container'>
                <h3 className='projects-list-item__header'>
                    {project.name}
                </h3>
                <p className='projects-list-item__description'>
                    {project.description}
                </p>
                <div className='projects-list-item__link-container'>
                    <Link to={project.link} className='projects-list-item__link' target='_blank'>
                        <span>GitHub</span>
                        <FaExternalLinkAlt />
                    </Link>
                </div>
            </div>
        </li>
    )
}
