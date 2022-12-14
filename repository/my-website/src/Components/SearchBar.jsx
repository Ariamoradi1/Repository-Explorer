import React from "react";
import axios from 'axios'
import { useState } from "react";
import './SearchBar.css'
import Result from "./Result";


const SearchBar = () => { 
    const [Input, setInput] = useState('')
    const [repos, setRepos] = useState([])
    const inputHandler = (e) => {
    setInput(e.target.value)
    }
    const clickHandler = async () => {
        try{
            const result = await axios(`https://api.github.com/users/${Input}/repos`)
            setRepos(result)
        }catch(err){
            console.log(err)
        }
   
    }
    console.log(repos)
    return(
        <>
        <h1 style={{textAlign:'center'}}>repository explorer</h1>
        <div className="repo-container">
        <div>
            <input type="text" placeholder="enter the username github" value={Input} onChange={inputHandler} />
            <button onClick={clickHandler}>click me</button>
        </div>
        <Result repos={repos}/>
        </div>
        </>
    )
}

export default SearchBar