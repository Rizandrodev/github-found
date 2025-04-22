import { useState } from "react"
import { Userprops } from "../../types/user"
import Search from "../search/search"
import User from "../user/user"
import Error from "../error/error"
const Home=()=>{
    const [user,setUSer]=useState<Userprops| null >(null)
    const [error,setError]=useState(false)

    const loadUsers=async(username:string)=>{
        setError(true)
        setUSer(null)
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();

        if(res.status===404){
            return
        }
        const {avatar_url,login,location,followers,following}=data
        const userData:Userprops={
            avatar_url:avatar_url,
            login:login,
            location:location,
            followers:followers,
            following:following
        }
        console.log(data)
        setUSer(userData)
    }
    return(
        <div>
            <Search loadUser={loadUsers}/>
            {user && <User {...user}/>}
            {error &&<Error/>}
        </div>

    )
}

export default Home