'use client';
import ExampleServer from "./ExampleServer";

function ExampleClient() {
  console.log("Rendering Client Component");
  return (
    <div>
      <h1>This is Client Component</h1>
      <ExampleServer />
    </div>
  )
}

export default ExampleClient