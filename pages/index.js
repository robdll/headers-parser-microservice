import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Requester headers parser</title>
        <meta
          name="description"
          content="Microservice API to get requester information such us ip address, language and OS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Requester headers parser microservice</h1>

      <main className={styles.main}>
        <p className={styles.description}>Example Usage:</p>
        <code className={styles.code}>[project url]/api/whoami</code>

        <p className={styles.description}>Example Output:</p>
        <code className={styles.code}>
          {`{`}
          <br />
          &quot;ipaddress&quot;:&quot;159.20.14.100&quot;,
          <br />
          &quot;language&quot;:&quot;en-US,en;q=0.5&quot;,
          <br />
          &quot;software&quot;:&quot;Mozilla/5.0 (X11; Ubuntu; Linux x86_64;
          rv:50.0) Gecko/20100101 Firefox/50.0&quot;
          <br />
          {`}`}
        </code>

        <p className={styles.description}>Try it out</p>
        <Link href="/api/whoami">
          <a className={styles.link}>/api/whoami</a>
        </Link>
      </main>
    </div>
  );
}
