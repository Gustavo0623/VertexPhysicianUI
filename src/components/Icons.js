// Icon Component
import React from 'react'

function Icons ({iconDetails}) {

    return (
        <div className='iconContainer'>

            <div className={ iconDetails[0] === 0 ? 'icon green' : iconDetails[0] === 1 ? 'icon yellow' : 'icon red'}>
                <img src='images/home.png' alt='home'/>
            </div>
            
            <div className={ iconDetails[1] === 0 ? 'icon green' : iconDetails[1] === 1 ? 'icon yellow' : 'icon red'}>
                <img src='images/drink.png' alt='food'/>
            </div>

            <div className={ iconDetails[2] === 0 ? 'icon green' : iconDetails[2] === 1 ? 'icon yellow' : 'icon red'}>
                <img src='images/heart.png' alt='health'/>
            </div>
        </div>
    )
}

export default Icons