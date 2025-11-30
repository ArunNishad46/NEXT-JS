export default function AboutLayout({ children }) {
  return (
    <>
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
        I'm the About Layout
      </h1>
      <main>
        {children}
      </main>
    </>
      
  );
}