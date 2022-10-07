import s from './Header.module.scss';

export const Header = () => {
    return (
        <header className={s.root}>
            <h1 className={s.title}>
                Hi there<br />
                My name is Maxim Obelets and i'm web developer
            </h1>
        </header>
    )
}