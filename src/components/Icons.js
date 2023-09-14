// Icon Component with icon details props passed from UserBox component
import React from 'react'

function Icons ({iconDetails}) {

    // function that will determine the className of each icon to determine the color depending on the iconDetails prop value that will change with every user
    const setClass = (detail) => {
        // values are as follows, (0 = green/good, 1 = yellow/average, 2 red/needs improvement)
        if (detail === 0) {
            return 'icon green'
        } else if (detail === 1) {
            return 'icon yellow'
        } else 
        return 'icon red'
    }

    return (

            <div className='iconContainer'>

                <div className={ setClass(iconDetails[0]) }>
                    <img src='images/home.png' alt='home'/>
                </div>
                
                <div className={ setClass(iconDetails[1]) }>
                    <img src='images/drink.png' alt='food'/>
                </div>

                <div className={ setClass(iconDetails[2]) }>
                    <img src='images/heart.png' alt='health'/>
                </div>

                {   // ** this wont work in this component since it will be in the same div the width gets adjusted **
                    // !collapsed && index === userIndex ? 
                    // <div className='expansion'>
                    //     <div className={ setClass(iconDetails[3]) }>
                    //         <img src='images/car.png' alt='transportation security icon'/>
                    //     </div> 
                    // </div>
                    // : 
                    // null
                }
                
            </div>

    )
}

export default Icons