import { useState } from 'react';
import GithubUser from './githubUser';


const FindGitHubUser = () => {
  const [user, setUser] = useState("");
  return (
    <div className='search-container'>
        <h1>Find User</h1>
        <form className='search-box'>
            <label htmlFor="username"></label>
            <input type="text"
                   placeholder='Enter username...'
                   onChange={(e) => {setUser(e.target.value)}}/>
        </form>

        <div className="result">
        {user ? 
          <GithubUser userName={user} /> : 
          <p className='default'>Please Initiate a Search!!!</p>
        }
      </div>
    </div>
  )
}

export default FindGitHubUser;