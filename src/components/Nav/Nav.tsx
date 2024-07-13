import { useState } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "../../constants";

import menuIcon from './assets/menu.svg';
import crossIcon from './assets/cross.svg';

import s from './Nav.module.css';

export const Nav = (): React.ReactNode => {
    const [mobileMenu, setMobileMenu] = useState(true);

	const handleMobileMenu = (): void => setMobileMenu(!mobileMenu);

    const { i18n } = useTranslation();

    const handleLanguage = (lang: any) => {
        i18n.changeLanguage(lang)
    }

    const navConfig = [
        {
            path: '/',
            title: 'Main'
        },
        {
            path: '/github',
            title: 'GitHub'
        },
        // {
        //     path: '/',
        //     title: 'About'
        // },
        // {
        //     path: '/',
        //     title: 'Projects'
        // },
        // {
        //     path: '/',
        //     title: 'Contacts'
        // },
    ]

    return (
        <nav className={cn(s.root, !mobileMenu && s.mobileNav  )}>
            <NavLink to="/" className={cn(s.link, s.logo)}>
                MaximObelets
            </NavLink>
            <ul className={cn(s.list, !mobileMenu && s.listMobile)}>
                {navConfig.map((navLink) => (
                    <NavLink
                        to={navLink.path}
                        className={s.link}
                        key={navLink.title}
                        onClick={handleMobileMenu}
                    >
                        {navLink.title}
                    </NavLink>
                ))}
            </ul>
            <img
				src={mobileMenu ? menuIcon : crossIcon}
				alt={mobileMenu ? 'Icon for open mobile menu' : 'Icon for close mobile menu'}
				className={s.mobileMenu}
				onClick={handleMobileMenu}
			/>
            {/* <select className={s.lang} defaultValue="En"> */}
                {LANGUAGES.map((language) => (
                    <div onClick={() => handleLanguage(language.code)}>
                        {language.language}
                    </div>
                ))}
            {/* </select> */}
        </nav>
    )
}