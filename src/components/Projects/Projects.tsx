import { ProjectBlock } from '../ProjectBlock';

import s from './Projects.module.css';

export const Projects = () => {
    return (
        <section className={s.root}>
            <ProjectBlock 
                title='First Project'
                description='First Project'
            />
            <ProjectBlock 
                title='Second Project'
                description='Second Project'
            />
        </section>
    )
}