import Link from "next/link"

export const Nav = (): React.ReactNode => {
    return (
        <nav className="flex justify-between">
            <Link href="/" className="mr-6 left-0 ">
                MaximObelets
            </Link>
            <ul>
                <Link href="/" className="mr-6">
                    Main
                </Link>
                <Link href="/" className="mr-6">
                    About
                </Link>
                <Link href="/" className="mr-6">
                    GitHub
                </Link>
                <Link href="/" className="mr-6">
                    Projects
                </Link>
                <Link href="/" className="mr-6">
                    Contacts
                </Link>
            </ul>
            <div>
                En / Ru
            </div>
        </nav>
    )
}