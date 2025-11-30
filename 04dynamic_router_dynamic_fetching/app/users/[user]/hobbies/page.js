import Link from "next/link"

async function page({params}) {
  const {user} = await params;

  return (
    <div>
      <h1>Your Hobbies</h1>
      <ul>
        <Link href={`../${user}/hobbies/reading`}>
          <p>Reading</p>
        </Link>
        <Link href={`../${user}/hobbies/traveling`}>
          <p>Traveling</p>
        </Link>
        <Link href={`../${user}/hobbies/cooking`}>
          <p>Cooking</p>
        </Link>
        <Link href={`../${user}/hobbies/gaming`}>
          <p>Gaming</p>
        </Link>
        <Link href={`../${user}/hobbies/hiking`}>
          <p>Hiking</p>
        </Link>
      </ul>
    </div>
  )
}

export default page