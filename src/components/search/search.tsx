import { KeyboardEvent, useState } from "react"
import { BsSearch } from "react-icons/bs"
import styles from './search.module.css'
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
        <div className={styles.search}>
            <h2>Find a User</h2>
            <p>Know your best repositories</p>
            <div className={styles.search_container}>
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
            
        </div>
    )
}
export default Search