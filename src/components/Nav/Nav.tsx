import { HashLink } from 'react-router-hash-link';

import s from './Nav.module.scss';

export const Nav = () => {
    return (
        <nav className={s.root}>
            <HashLink to="/#about">
                Home
            </HashLink>
        </nav>
    )
}