import s from './Footer.module.scss';

export const Footer = () => {
    const currentYear = () => new Date().getFullYear();

    return (
        <footer className={s.root}>
            Footer
            <p>
                {currentYear()}
            </p>
        </footer>
    )
}