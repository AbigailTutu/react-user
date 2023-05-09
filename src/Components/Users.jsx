/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Users = (props) => {
  return (
    <div>
    {props.usersjsx.map((user, index)=> (
        <div key={index}>
        <div>
          Name : {user.name}<br/>
          Email : {user.email}<br/>
          Gen : {user.gen}<br/>
        </div>
        <hr/>
        </div>
     ))}
    </div>
  )
}

export default Users
