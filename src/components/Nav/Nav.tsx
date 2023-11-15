import { HashLink } from 'react-router-hash-link';

import s from './Nav.module.scss';

export const Nav = () => {
    const hiThere  = () => {
        const youCanReadThisText = true;

        const simpleLogic = 10 > 1;

        if (youCanReadThisText && simpleLogic) {
            return 'Hi there 👋'
        }
    }

    hiThere();


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