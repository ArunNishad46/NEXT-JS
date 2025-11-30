export default async function getAllUsers() {
  try {
    const res = await fetch('https://dummyjson.com/users');
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error(error);
    return [];
  }
}
