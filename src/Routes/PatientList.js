import React from 'react'
// import Expand from '../components/Expand';
import Icons from '../components/Icons'
import {Outlet, Link} from 'react-router-dom'

function PatientList ({userData, currentUser, setCurrentUser}) {
    // users array (Temporary Placeholder Values)
    // for each value in users array, value[0] = username, & value[1] = array containing the details of each user in the order of home, meals, and heart health or heart rate where 0 = good / 1 = okay / 2 = needs improvement
    // depending on (Actual) data the values will be adjusted and gathered via fetch request to server.
    let users = userData
    // state variable to determine expansion/collapse
    // let [collapse, setCollapse] = useState(true);
    // // state variable to track the user index upon clicking a specific user
    // let [userIndex, setUserIndex] = useState(null);

    // const expand = (index) => {
    //     if (userIndex === null) {
    //         setUserIndex(index)
    //         setCollapse(false)
    //     } else if (userIndex !== null) {
    //         if ( index === userIndex) {
    //             setCollapse(true)
    //             setUserIndex(null)
    //         } else if ( index !== userIndex) {
    //             setCollapse(false)
    //             setUserIndex(index)
    //         }
    //     }
    // }
    
    return (
        <div id='userBox'>
            {/* User container with username and other details */}
            {users.map((user, index) => (
                <div className='userDetails' key={index} > 
                    <Link className='userFlexBlock' onClick={() => {
                        setCurrentUser(user);
                        }} 
                        to={`./${user[0]}`}
                    >
                        <h1 className='userName'>{user[0]}</h1>
                        <Icons iconDetails={user[1]}/>
                    </Link>
                </div>
            ))}
            <Outlet/>
        </div>
    )
}

export default PatientList