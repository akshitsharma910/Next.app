import { useRouter} from "next/router";


const intro=()=>{
    const router=useRouter();
    console.log(router);

    return (
        <div>
            <h1> this is setting page for {router.query.username} </h1>
        </div>
    )
}


export default intro