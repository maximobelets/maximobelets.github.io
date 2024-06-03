import Photo from './assets/photo.png';

import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.content}>
                <h2 className={s.title}>
                    Hi there 👋
                </h2>
                <p className={s.description}>
                    My name is Maxim Obelets<br />
                    I'm a web developer
                </p>
            </div>
            <img
                className={s.image}
                src={Photo}
                alt="Picture of the author"
            />
        </header>
    )
}