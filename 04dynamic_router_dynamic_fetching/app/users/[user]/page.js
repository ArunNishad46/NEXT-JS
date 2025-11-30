export default async function page({params}) {
  const {user} = await params;
  return (
    <div> 
      User {user}
    </div>
  )
}
