import { useState } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "../../constants";
import { navConfig } from "../../utils/config";

import menuIcon from './assets/menu.svg';
import crossIcon from './assets/cross.svg';

import s from './Nav.module.css';

export const Nav = (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const { i18n, t } = useTranslation();

    const handleSelect = () => {
		setIsOpen(prevState => !prevState)
	}

	const changeLanguage = (data: any) => {
        i18n.changeLanguage(data)
		setIsOpen(prevState => !prevState)
	}

	const handleisMobileMenu = (): void => setIsMobileMenu(prevState => !prevState);

    return (
        <nav className={cn(s.root, isMobileMenu && s.mobileNav  )}>
            <NavLink to="/" className={cn(s.link, s.logo)}>
                MaximObelets
            </NavLink>
            <ul className={cn(s.list, isMobileMenu && s.listMobile)}>
                {navConfig.map((navLink) => (
                    <NavLink
                        to={navLink.path}
                        className={s.link}
                        key={navLink.title}
                        onClick={handleisMobileMenu}
                    >
                        {navLink.title}
                    </NavLink>
                ))}
            </ul>
            <img
				src={isMobileMenu ? crossIcon : menuIcon}
				alt={isMobileMenu ? 'Icon for close mobile menu' : 'Icon for open mobile menu'}
				className={s.isMobileMenu}
				onClick={handleisMobileMenu}
			/>
            <div className={s.langSwitcher}>
                <span onClick={handleSelect} className={s.span}>
                    {t("main.lang")}
                </span>
				{isOpen && (
					<ul className={s.langList}>
						{LANGUAGES?.map((item) =>
							<li
                                onClick={() => changeLanguage(item.code)}
                                className={s.lang}
                                key={item.code}
                            >
								{item.language}
							</li>
						)}
					</ul>
				)}
			</div>
        </nav>
    )
}