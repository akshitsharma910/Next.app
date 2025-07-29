// import { useEffect,useState } from "react"
import Link from "next/link"
import useSWR from "swr"
import styles from "../../styles/User.module.css"



const fetcher=(...args)=>fetch(...args).then(res=>res.json())

const UserPage=()=>{

    const {data,error}=useSWR("https://dummyjson.com/users",fetcher)
    console.log("data",data)

    if(error){
        return <h1>Error Happened</h1>
    }

    if(!data){
        return <h1>Loading..!</h1>
    }

    // const [users,setUsers] =useState([])
    // console.log("Users", users)
    // useEffect(()=>{
    //     async function fetchUsers() {
    //         const data=await fetch("https://dummyjson.com/users")
    //         setUsers(await data.json())
    //     }
    //     fetchUsers()
    // },[])

    return(
        <div>
            <h1> Users </h1>
            {
                data.users&& data.users.map(user=><Link href={`/user/${user.id}`} key={user.id}>
                <div className={styles["text"]}>{user.firstName}</div></Link>)
            }
        </div>
    )
}

export default UserPage