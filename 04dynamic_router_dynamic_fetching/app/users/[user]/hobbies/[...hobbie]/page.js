export default async function page({params}) {
  const {user, hobbie} = await params;
  return (
    <div>
      <h1>User Id: {user}</h1>
      <h2>Hobby: {hobbie[0]}</h2>
    </div>
  )
}