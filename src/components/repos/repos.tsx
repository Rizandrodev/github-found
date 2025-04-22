    import { useEffect, useState } from "react"
    import { Link, useParams } from "react-router-dom"

    type Repo={
        id:number,
        name:string,
        html_url:string,
        description:string
    }
    const Repos=()=>{
        const {login}=useParams<{login:string}>()
        const [repos,setRepos]=useState<Repo[]>([])
        const [loading,setLoading]=useState(true)

        async function fetchRepos(){
            try{
                const res = await fetch(`https://api.github.com/users/${login}/repos`)    
                const data=await res.json()
                setRepos(data)
            }catch(err){
                console.log("Erro to Get Users"+err)
            }finally{
                setLoading(false)
            }
        }
        useEffect(()=>{
            fetchRepos()
        },
        [])
        if(loading) return <p>Loading...</p>
        return(
            <div >
                <h2>Repository of {login}</h2>
                <ul>
                    {repos.map((repo)=>(
                        <li key={repo.id}>
                            <Link to={repo.html_url}>{repo.name}</Link>
                            <p>{repo.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }

    export default Repos