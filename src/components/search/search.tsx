import { KeyboardEvent, useState } from "react"
import { BsSearch } from "react-icons/bs"

type SearchProps={
    loadUser:(userame:string)=>Promise<void>
}

const Search=({loadUser}:SearchProps)=>{
    const [username,setUsername]=useState("")
    const handleKeyDown=(e:KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==='Enter'){
        loadUser(username)
    }
    }
    return(
        <div>
            <h2>Find a User</h2>
            <p>Know your best repositories</p>
            <input
                type="text"
                placeholder="Write the user's name"
                onChange={(e)=>{setUsername(e.target.value)}}
                onKeyDown={handleKeyDown}
            />
            <button onClick={()=>loadUser(username)}>
                <BsSearch/>
            </button>
        </div>
    )
}
export default Search