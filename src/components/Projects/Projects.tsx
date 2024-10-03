import { useTranslation } from 'react-i18next';
import { ProjectBlock } from '../ProjectBlock';

import s from './Projects.module.css';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <section className={s.root}>
            <ProjectBlock 
                title='react-headers'
                description={t("projects.reactHeaders")}
                link='https://github.com/maximobelets/react-headers'
            />
            <ProjectBlock 
                title='Frontend Interview'
                description={t("projects.frontendInterview")}
                link='https://github.com/maximobelets/Frontend-Interview'
            />
        </section>
    )
}