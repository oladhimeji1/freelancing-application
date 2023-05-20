import Link from "next/link";
import styles from '@/styles/Users.module.css'
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.END_POINT}`);
  const data = await res.json()

  return {
    props: {users: data}
  }
}

export default function Users({ users }) {
  return (
    <>
      <Head>
        <title>Users List | All Users</title>
        <meta name='keywords' content='users' />
        <meta name='author' content='Oladhimeji' />
      </Head>
      <h1 className="text-center text-xl text-bold py-5">All Users</h1>
      
        {users.map(user => (
          <Link href={`/users/${user.id}`}>
          <div title="Click here to see user details" className={styles.single} key={user.id}>
            <h3>{ user.name }</h3>
          </div>
          </Link>
        ))}
    </>
  )
}