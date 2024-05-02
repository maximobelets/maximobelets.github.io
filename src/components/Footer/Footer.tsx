import Image from 'next/image';
import gitHubIcon from './assets/github-icon.svg';
import instIcon from './assets/inst-icon.svg';
import telegramIcon from './assets/telegram-icon.svg';

export const Footer = (): React.ReactNode => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-between">
            <div className="w-[130px] flex justify-between">
                <Image
                    src={gitHubIcon}
                    width={30}
                    height={30}
                    alt="My GitHub"
                />
                <Image
                    src={instIcon}
                    width={30}
                    height={30}
                    alt="My Insta"
                />
                <Image
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