import { Link } from 'react-router-dom';
import s from './ProjectBlock.module.css';

interface ProjectBlockProps {
    title?: string;
    description?: string;
    link?: string;
    backgorund?: string;
}

export const ProjectBlock = ({ title, description, link, backgorund }: ProjectBlockProps) => {
    return (
        <Link to={link} target='_blank' className={s.root}>
            <div className={s.info}>
                <h3 className={s.title}>
                    {title}
                </h3>
                <p className={s.description}>
                    {description}
                </p>
            </div>
        </Link>
    )
}