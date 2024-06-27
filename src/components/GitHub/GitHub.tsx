import * as React from 'react';

import s from './GitHub.module.css';

export const GitHub = () => {
    interface GitHubData {
        avatar_url: string;
        followers: number;
        url: string;
        login: string;
        repos: number;
    };

    const [data, setData] = React.useState<GitHubData>({
        avatar_url: '',
        followers: 0,
        url: '',
        login: '',
        repos: 0,
    });

    React.useEffect(() => {
        fetch('https://api.github.com/users/maximobelets').then(response => response.json())
            .then(response => setData({
                avatar_url: response.avatar_url,
                followers: response.followers,
                url: response.html_url,
                login: response.login,
                repos: response.public_repos,
        }))
            .catch(error => console.log(error))
    }, [])

    if (!data.repos) return null;

    return (
        <div className={s.root}>
            <div className={s.content}>
                <h2 className={s.title}>
                    Find Me On{' '}
                    <a href={data.url} className={s.link} target='blank'>
                        GitHub
                    </a>
                </h2>
                <ul className={s.list}>
                    <li className={s.item}>Name: {data.login}</li>
                    <li className={s.item}>Public Repos: {data.repos}</li>
                    <li className={s.item}>Followers: {data.followers}</li>
                </ul>
            </div>
            <img src={data.avatar_url} alt="avatar" className={s.image} />
        </div>
    )
}