import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <span>Server Session:</span>
      {session?.user?.name ? (
        <span>Signed in as {session.user.name}</span>
      ) : (
        <span>Not signed in</span>
      )}
    </>
  );
}
