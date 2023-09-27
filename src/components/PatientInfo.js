import React from "react";

function PatientInfo ({iconDetails}) {

    const patientData = Object.values(iconDetails)

    // function that will determine the className of each icon to determine the color depending on the iconDetails prop value that will change with every user
    const setClass = (detail) => {
        // values are as follows, ('low' = green/good, 'medium' = yellow/average, 'high' red/high risk )
        if (detail === 'low') {
            return 'icon green'
        } else if (detail === 'medium') {
            return 'icon yellow'
        } else 
        return 'icon red'
    }

    const imageURL = ['../images/home.png', '../images/drink.png', '../images/heart.png', '../images/car.png', '../images/lifeline.png', '../images/sad.png', '../images/shield.png', '../images/pills-bottle.png', ]
    const imageDescriptions = ['Housing/Utilities Security', 'Food Security', 'Emotional Health', 'Transportation Security', 'Suicide', 'Depression', 'Interpersonal Safety', 'Substance Use']
    
    return (

        <div className='expansion'>
            {
                patientData.map((detail, index) => (
                    <div className='detailGroup' key={index}>
                        <div className={setClass(detail)}>
                            <img src={imageURL[index]} alt={imageDescriptions[index]}/>
                        </div>
                    </div>
                ))
                }
        </div>
    )

}

export default PatientInfo