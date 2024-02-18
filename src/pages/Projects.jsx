import ProjectsList from "../components/ProjectsList";
import './projects.scss';

export default function Projects() {
    return (
        <section className='projects'>
            <h2 className='projects__header'>
                My projects
            </h2>
            <ProjectsList />
        </section>
    )
}
