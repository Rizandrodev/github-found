import { useState } from "react"
import { Userprops } from "../../types/user"
import Search from "../search/search"

const Home=()=>{
    const [user,setUSer]=useState<Userprops| null >(null)
    const [erro,setError]=useState(false)

    const loadUsers=async(username:string)=>{
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
        </div>

    )
}

export default Home