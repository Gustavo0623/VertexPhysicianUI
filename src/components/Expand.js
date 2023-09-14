import React from "react";

function Expand ({iconDetails}) {

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

    const imageURL = ['images/home.png', 'images/drink.png', 'images/heart.png', 'images/car.png', 'images/lifeline.png', 'images/sad.png', 'images/shield.png', 'images/pills-bottle.png', ]
    const imageAlts = ['Housing/Utilities Security', 'Food Security', 'Emotional Health', 'Transportation Security', 'Suicide', 'Depression', 'Interpersonal Safety', 'Substance Use']
    return (

        <div className='expansion'>
            {
                iconDetails.map((detail, index) => (
                    <div className='detailGroup' key={index}>
                        <div className={setClass(detail)}>
                            <img src={imageURL[index]} alt={imageAlts[index]}/>
                        </div>
                        <p className='detail'>{imageAlts[index]}</p>
                    </div>
                ))
            }
        </div>
    )

}

export default Expand