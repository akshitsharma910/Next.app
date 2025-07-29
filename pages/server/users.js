const UserPage=(props)=>{
    console.log(props)
    return(
        <div>
            <h1>
                USER (SSR)
                {
                    props.data.users.map(user=><li key={user.id}>{user.firstName}</li>)
                }
            </h1>
        </div>
    )
}

export const getServerSideProps=async()=>{
    const data=await (await fetch("https://dummyjson.com/users")).json()
    console.log("task going on")
    return{
        props:{data}
    }
}


export default UserPage