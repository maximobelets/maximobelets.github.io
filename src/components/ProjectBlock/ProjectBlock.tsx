import s from './ProjectBlock.module.css';

interface ProjectBlockProps {
    title?: string;
    description?: string;
    link?: string;
    backgorund?: string;
}

export const ProjectBlock = ({ title, description, link, backgorund }: ProjectBlockProps) => {
    return (
        <div className={s.root}>
            <h3 className={s.title}>
                {title}
            </h3>
            <p className={s.description}>
                {description}
            </p>
        </div>
    )
}