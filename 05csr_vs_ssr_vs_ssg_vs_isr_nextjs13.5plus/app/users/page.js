import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export default async function Users() {
  const users = await getAllUsers();
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <Link className="text-blue-500 underline" href={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
        </div>
      ))}
    </div>
  )
}
