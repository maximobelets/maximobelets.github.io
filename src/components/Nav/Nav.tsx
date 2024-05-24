import { NavLink } from "react-router-dom";

import s from './Nav.module.css';

export const Nav = (): React.ReactNode => {
    return (
        <nav className={s.root}>
            <NavLink to="/" className={s.link}>
                MaximObelets
            </NavLink>
            <ul className={s.list}>
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
            <div>
                En / Ru
            </div>
        </nav>
    )
}