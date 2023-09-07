import React from 'react'
import Icons from './Icons'

function UserBox () {
    // users array (Temporary Placeholder Values)
    // for each value in users array, value[0] = username, & value[1] = array containing the details of each user in the order of home, meals, and heart health or heart rate where 0 = good / 1 = okay / 2 = needs improvement
    // depending on (Actual) data the values will be adjusted and gathered via fetch request to server.
    const users = [['Lois Lane', [0, 0, 2]], ['Mary Jane', [1 , 2, 0]], ['Padme Amalda', [0, 2, 1]], ['Christine Chapel', [2, 1, 0]]]

    return (
        <main id='userBox'>
            {/* User container with username and other details */}
            {users.map((user, index) => (
                <div id='userDetails' key={index}> 
                    <h1>{user[0]}</h1>
                    <Icons iconDetails={user[1]}/>
                </div>
            ))}
        </main>
    )
}

export default UserBox