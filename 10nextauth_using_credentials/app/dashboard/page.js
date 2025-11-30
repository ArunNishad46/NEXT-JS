import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if(!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-120 py-2">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Welcome, {session?.user?.name}!</p>
    </div>
  );
}