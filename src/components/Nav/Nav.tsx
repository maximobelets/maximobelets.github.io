import { NavLink } from "react-router-dom";

export const Nav = (): React.ReactNode => {
    return (
        <nav className="flex justify-between">
            <NavLink to="/" className="mr-6 left-0">
                MaximObelets
            </NavLink>
            <ul>
                <NavLink to="/" className="mr-6">
                    Main
                </NavLink>
                <NavLink to="/" className="mr-6">
                    About
                </NavLink>
                <NavLink to="/github" className="mr-6">
                    GitHub
                </NavLink>
                <NavLink to="/" className="mr-6">
                    Projects
                </NavLink>
                <NavLink to="/" className="mr-6">
                    Contacts
                </NavLink>
            </ul>
            <div>
                En / Ru
            </div>
        </nav>
    )
}