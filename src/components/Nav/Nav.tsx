import { HashLink } from 'react-router-hash-link';

import s from './Nav.module.scss';

export const Nav = () => {
    return (
        <nav className={s.root}>
            <HashLink to="/#github" className={s.item}>
                About
            </HashLink>
            <HashLink to="/#github" className={s.item}>
                GitHub
            </HashLink>
            <HashLink to="/#github" className={s.item}>
                Contacts
            </HashLink>
        </nav>
    )
}