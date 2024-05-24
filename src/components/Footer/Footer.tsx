import gitHubIcon from './assets/github-icon.svg';
import instIcon from './assets/inst-icon.svg';
import telegramIcon from './assets/telegram-icon.svg';

import s from './Footer.module.css';

export const Footer = (): React.ReactNode => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={s.root}>
            <div className={s.links}>
                <img
                    src={gitHubIcon}
                    width={30}
                    height={30}
                    alt="My GitHub"
                />
                <img
                    src={instIcon}
                    width={30}
                    height={30}
                    alt="My Insta"
                />
                <img
                    src={telegramIcon}
                    width={30}
                    height={30}
                    alt="My Telegram"
                />
            </div>
            <p className={s.date}>
                {currentYear}
            </p>
        </footer>
    )
}