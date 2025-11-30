import styles from './page.module.css';
import Example from './Example';
import ExampleClient from '@/components/ExampleClient';

export default function Home() {
  console.log("Rendering Home Page");
  return (
    <main className={styles.main}>
      <h1>This is Home Page</h1>
      <ExampleClient />
      <Example />
    </main>
  );
}
