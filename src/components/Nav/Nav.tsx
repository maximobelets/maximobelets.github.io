import { useState } from "react";
import cn from "classnames";

import { NavLink } from "react-router-dom";

import menuIcon from './assets/menu.svg';
import crossIcon from './assets/cross.svg';

import s from './Nav.module.css';

export const Nav = (): React.ReactNode => {
    const [mobileMenu, setMobileMenu] = useState(true);

	const handleMobileMenu = () => setMobileMenu(!mobileMenu);

    return (
        <nav className={cn(s.root, !mobileMenu && s.mobileNav  )}>
            <NavLink to="/" className={cn(s.link, s.logo)}>
                MaximObelets
            </NavLink>
            <ul className={cn(s.list, !mobileMenu && s.listMobile)}>
                <NavLink to="/" className={s.link}>
                    Main
                </NavLink>
                <NavLink to="/" className={s.link}>
                    About
                </NavLink>
                <NavLink to="/github" className={s.link}>
                    GitHub
                </NavLink>
                <NavLink to="/" className={s.link}>
                    Projects
                </NavLink>
                <NavLink to="/" className={s.link}>
                    Contacts
                </NavLink>
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