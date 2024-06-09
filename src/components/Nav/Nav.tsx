import { useState } from "react";
import cn from "classnames";

import { NavLink } from "react-router-dom";

import menuIcon from './assets/menu.svg';
import crossIcon from './assets/cross.svg';

import s from './Nav.module.css';

export const Nav = (): React.ReactNode => {
    const [mobileMenu, setMobileMenu] = useState(true);

	const handleMobileMenu = (): void => setMobileMenu(!mobileMenu);

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
            <div className={s.lang}>
                En / Ru
            </div>
        </nav>
    )
}