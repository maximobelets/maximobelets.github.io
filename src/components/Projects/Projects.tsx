import s from './Projects.module.scss';

export const Projects = () => {
    return (
        <div className={s.root}>
            Projects
            <div className={s.wrapper}>
                <div className={s.project}>1</div>
                <div className={s.project}>2</div>
                <div className={s.project}>3</div>
            </div>
        </div>
    )
}