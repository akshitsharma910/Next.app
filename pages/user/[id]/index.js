import { useRouter } from "next/router"
import {useState,useEffect} from "react"
import useSWR from "swr"

const fetcher=(...args)=>fetch(...args).then(res=>res.json())


const UserInfoPage=()=>{
    const router=useRouter()
    const id=router.query.id
    // const [userInfo,setUserInfo]=useState()

    // console.log(userInfo)


    // useEffect(()=>{
    
    //     async function getUserById(id){
    //         const data=await fetch(`https://dummyjson.com/users/${id}`)
    //         setUserInfo(await data.json())
    //     }

    //     getUserById(id)
    // },[router.query.id])

    const {data,error}=useSWR(`https://dummyjson.com/users/${id}`,fetcher)
    console.log("data",data)

    if(error){
        return <h1>Error Happened</h1>
    }

    if(!data){
        return <h1>Loading..!</h1>
    }

    return (
        <div>
            <h1>
                Name: {data?.firstName} 
                <br/>
                Email: {data?.email}
            </h1>
                
        </div>
    )
}


export default UserInfoPage