// Icon Component
import React from 'react'

function Icons ({iconDetails}) {

    return (
        <div className='iconContainer'>
            <img src='' alt='home' className={ iconDetails[0] === 0 ? 'icon green' : iconDetails[0] === 1 ? 'icon yellow' : 'icon red'}/>
            <img src='' alt='food' className={ iconDetails[1] === 0 ? 'icon green' : iconDetails[1] === 1 ? 'icon yellow' : 'icon red'}/>
            <img src='' alt='health' className={ iconDetails[2] === 0 ? 'icon green' : iconDetails[2] === 1 ? 'icon yellow' : 'icon red'}/>
        </div>
    )
}

export default Icons