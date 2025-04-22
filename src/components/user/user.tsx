import { MdLocationPin } from "react-icons/md"
import { Userprops } from "../../types/user"
import { Link } from "react-router-dom"
import styles from './user.module.css'
const User=(
   { avatar_url,
    login,
    followers,
    following,
    location,}:Userprops
)=>{
    return(
        <div className={styles.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {
                location&&(
                    <p>
                        <MdLocationPin/>
                        <span>{location}</span>

                    </p>
                )
            }
            <div>
                <div>
                    <p>followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>following</p>
                    <p >{following}</p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Other repositorios</Link>
         </div>
    )
}

export default User