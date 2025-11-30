import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="font-bold text-zinc-900 dark:text-zinc-100">
        404 - Page Not Found
      </h2>
      <Link href="/" className="text-blue-500 underline ml-4">
        Go back home
      </Link>
    </div>
  );
}