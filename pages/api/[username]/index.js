import { useRouter } from "next/router";

const intro=()=>{
    const router=useRouter();
    console.log(router);

    return (
        <div>
            <h1> this is setting page for user </h1>
            <button onClick={(e)=>{
                router.push({pathname:"/user/[username]/settings",
                            query:{username:router.query.username}
                })
            }}>Open Settings Page</button>
        </div>
    )
}


export default intro