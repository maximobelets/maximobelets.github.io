import { useTranslation } from 'react-i18next';

import Photo from './assets/photo.png';

import s from './Header.module.css';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className={s.root}>
            <div className={s.content}>
                <h2 className={s.title}>
                    {t("main.title")}
                </h2>
                <p className={s.description}>
                    {t("main.descriptionFirst")}<br />
                    {t("main.descriptionSecond")}
                </p>
            </div>
            <img
                className={s.image}
                src={Photo}
                alt={t("main.altForPhoto")}
            />
        </header>
    )
}