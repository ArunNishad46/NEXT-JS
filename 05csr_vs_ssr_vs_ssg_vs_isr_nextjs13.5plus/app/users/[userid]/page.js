import getUser from "@/lib/getUser";
import getAllUsers from "@/lib/getAllUsers";

export async function generateStaticParams() {
  const users = await getAllUsers();
  return users.map(user => ({
    userid: user.id.toString()
  }));
}

export default async function User({params}) {
  const { userid } = await params;
  const user = await getUser(userid);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center p-6 w-120 h-120 bg-gray-600 rounded-lg shadow-md">
        <img src={user.image} alt={`${user.username}'s profile`} className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-2">{user.firstName} {user.lastName}</h1>
        <p className="text-gray-300 mb-1">Age: {user.age}</p>
        <p className="text-gray-300 mb-1">Gender: {user.gender}</p>
        <p className="text-gray-300 mb-1">Country: {user.address.country}</p>
        <p className="text-gray-300">Username: {user.username}</p>
        <p className="text-gray-300 mb-1">Email: {user.email}</p>
        <p className="text-gray-300">Role: {user.company.title}</p>
        <p className="text-gray-300">Dpartment: {user.company.department}</p>
      </div>
    </div>
  )
}
