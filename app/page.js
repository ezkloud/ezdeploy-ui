import Link from 'next/link';

export default function Home() {
  const getGitHubURL = () => {
    const authorizeURL = process.env.NEXT_PUBLIC_GITHUB_AUTHORIZE_URL;
    const clientID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const scope = process.env.NEXT_PUBLIC_GITHUB_SCOPES;

    return `${authorizeURL}?client_id=${clientID}&scope=${scope}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={getGitHubURL()}>Login with GitHub</Link>
    </main>
  )
}
