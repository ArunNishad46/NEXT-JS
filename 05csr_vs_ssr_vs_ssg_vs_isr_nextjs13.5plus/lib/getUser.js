export default async function getUser(userid) {
  try {
    const res = await fetch(`https://dummyjson.com/users/${userid}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}