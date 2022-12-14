import React from "react";
import Table from 'react-bootstrap/Table';


const Result = (props) => {
    const { repos } = props
    console.log('repos is', repos.data)
   const listRepos = repos.length !==0 ? (
    repos.data.map((item) => <td>{item.name}</td>)
   ) : (
    <td>repos not found</td>
   )
    return(
        <>
        <Table>
            <tbody>
            <tr>        
          <td>name repositorys</td>
          <td>{listRepos}</td>
        </tr>
            </tbody>
        </Table>
       
        </>
    )
}

export default Result