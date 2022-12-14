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
   const linkRepos = repos.length !==0 ? (
    repos.data.map((item) => <td>{item.clone_url}</td>)
   ) : (
    <td>repos not found</td>
   )
    return(
        <>
        <div className='tabels'>
        <div className='table1'>
        <Table>
            <tbody>
            <tr>        
          <td>name repositorys</td>
          <td>{listRepos}</td>
        </tr>
            </tbody>
        </Table>
        </div>
        <div className='table2'>
        <Table>
            <tbody>
        <tr>        
          <td>link</td>
          <td>{linkRepos}</td>
        </tr>
            </tbody>
        </Table>
       </div>
       </div>
        </>
    )
}

export default Result
