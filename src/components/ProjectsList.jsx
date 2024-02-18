import ProjectsListItem from './ProjectsListItem';
import './projectsList.scss';

const projects = [{
        id: 1,
        imageSource: 'projects-default-image.png',
        name: 'Movies App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus leo, condimentum nec lobortis non, interdum at ex. Donec id pulvinar eros. Cras quis scelerisque ex.',
        link: 'https://github.com/pawelpiotrowski38/movies-app',
    }, {
        id: 2,
        imageSource: 'projects-default-image.png',
        name: 'Nutrition Tracker App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus leo, condimentum nec lobortis non, interdum at ex. Donec id pulvinar eros. Cras quis scelerisque ex.',
        link: 'https://github.com/pawelpiotrowski38/nutrition-tracker-app',
    }, {
        id: 3,
        imageSource: 'projects-frontendmentor-image.png',
        name: 'Frontend Mentor Projects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus leo, condimentum nec lobortis non, interdum at ex. Donec id pulvinar eros. Cras quis scelerisque ex.',
        link: 'https://github.com/pawelpiotrowski38/frontend-mentor-projects',
    }
];

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