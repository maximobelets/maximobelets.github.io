import * as React from 'react';

export const About = () => {
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
                url: response.url,
                login: response.login,
                repos: response.public_repos,
        }))
            .catch(error => console.log(error))
    }, [])

    console.log(data)
    return (
        <div>
            About
            <h2>
                Find Me On GitHub
            </h2>
            <ul>
                <li>Name: {data.login}</li>
                <li>Public Repos: {data.repos}</li>
                <li>Followers: {data.followers}</li>
            </ul>
        </div>
    )
}