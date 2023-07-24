import s from './About.module.scss';

export const About = () => {
    return (
        <section className={s.root} id="about">
            <h2 className={s.title}>
                About
            </h2>
            <p className={s.description}>
                I'm a web developer and trouble shooter.
                <br />
                I like to create some useful stuff for developer teams and stuff crews. For example: bots, extensions etc.
                <br />
                Besides work I'm a husband, skater and coffee-lover.
            </p>
        </section>
    )
}