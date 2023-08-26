import React from 'react'
import Icons from './Icons'

function UserBox () {
    // users array (subject to change)
    const users = [['Lois Lane', [0, 0, 2]], ['Mary Jane', [1 , 2, 0]], ['Padme Amalda', [0, 2, 1]], ['Christine Chapel', [2, 1, 0]]]

    return (
        <div id='userBox'>
            {/* User container with username and other details */}
            {users.map((user, index) => (
                <div id='userDetails' key={index}> 
                    <h1>{user[0]}</h1>
                    <Icons iconDetails={user[1]}/>
                </div>
            ))}
        </div>
    )
}

export default UserBox