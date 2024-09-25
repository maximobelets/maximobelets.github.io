import { ProjectBlock } from '../ProjectBlock';

import s from './Projects.module.css';

export const Projects = () => {
    return (
        <section className={s.root}>
            <ProjectBlock 
                title='react-headers'
                description='React components library'
                link='https://github.com/maximobelets/react-headers'
            />
            <ProjectBlock 
                title='Frontend Interview'
                description='Simple guide about Frontend interview'
                link='https://github.com/maximobelets/Frontend-Interview'
            />
        </section>
    )
}