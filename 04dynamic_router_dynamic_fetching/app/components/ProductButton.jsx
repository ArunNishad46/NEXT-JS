'use client';
import { useRouter } from "next/navigation";

export default function ProductButton({ id }){
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${id}`);
  }

  return (
    <button onClick={handleClick} className="font-bold bg-blue-500 text-white px-2 py-1 rounded cursor-pointer">
      View Details
    </button>
  )
}