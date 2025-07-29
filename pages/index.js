import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useSession,signIn,signOut } from "next-auth/react";


import zoro from "../public/Zoro.jpg"

export default function Home() {
  const session=useSession()
  console.log("Session",session)

  if(session.data==null){
    return(
    <div className={styles.container}>
    <h1>Hi Random User </h1>
    <button onClick={signIn}>SignIn</button>
    </div>
  )
  }
  return (
    <div className={styles.container}>
      <h1>Updated</h1>
      <h1>Hello {session?.data?.user?.name}</h1>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
}
