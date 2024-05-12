import gitHubIcon from './assets/github-icon.svg';
import instIcon from './assets/inst-icon.svg';
import telegramIcon from './assets/telegram-icon.svg';

export const Footer = (): React.ReactNode => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-between items-start">
            <div className="w-[130px] flex justify-between">
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
            <p>
                {currentYear}
            </p>
        </footer>
    )
}