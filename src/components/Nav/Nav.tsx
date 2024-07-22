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
    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
	const [activeValue, setActiveValue] = useState(i18n.language);
    const [mobileMenu, setMobileMenu] = useState(true);

    const handleSelect = () => {
		setIsOpen(prevState => !prevState)
	}

	const changeValue = (data: any) => {
		setActiveValue(data)
        i18n.changeLanguage(data)
		setIsOpen(prevState => !prevState)
	}

	const handleMobileMenu = (): void => setMobileMenu(!mobileMenu);

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
            <div>
				<input
					value={activeValue}
					onClick={handleSelect}
                    className={s.input}
				/>
				{isOpen && (
					<ul>
						{LANGUAGES?.map((item) =>
							<li onClick={() => changeValue(item.code)}>
								{item.language}
							</li>
						)}
					</ul>
				)}
			</div>
        </nav>
    )
}