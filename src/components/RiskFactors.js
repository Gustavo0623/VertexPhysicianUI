import React from "react";

function RiskFactors ({riskFactors, imageDetails}) {
    
    const factors = Object.keys(riskFactors)
    const riskAlerts = Object.values(riskFactors)
    const imageURL = imageDetails[0]
    const imageDescriptions = imageDetails[1]

    // Create new arrays to store filtered results
    const filteredFactors = [];
    const filteredRiskAlerts = [];
    const filteredURLs = [];
    const filteredDescriptions = [];

    for (let i = 0; i < riskAlerts.length; i++) {
        if (riskAlerts[i] !== 'low') {
            filteredFactors.push(factors[i]);
            filteredRiskAlerts.push(riskAlerts[i]);
            filteredURLs.push(imageURL[i]);
            filteredDescriptions.push(imageDescriptions[i]);
        }
    }

    const setClass = (detail) => {
        // values are as follows, ('low' = green/good, 'medium' = yellow/average, 'high' red/high risk )
        if (detail === 'medium') {
            return 'riskImageBox yellow'
        } else 
        return 'riskImageBox red'
    }

    return (

        <div className='riskAlerts'>
                <p className='header'>Risk Alerts</p>
                <p className='riskResults'>{filteredRiskAlerts.length}</p>

                <div className='riskBoxContainer'>
                    {
                    filteredRiskAlerts.map((risk, index) => (
                        <div className='riskBox' key={index}>
                            <div className={setClass(risk)}>
                                <img className='largeIcon' src={filteredURLs[index]} alt={filteredDescriptions[index]}/>
                            </div>
                            <div className='riskDescriptionBox'>
                                <p className='header'>{filteredDescriptions[index]}</p>
                                <p className='riskDescriptionText'>Risk: { risk === 'high' ? 'Iminent' : 'Moderate' }</p>
                                <p className='riskDescriptionText'>Question 1</p>
                                <p className='riskDescriptionText'><strong>Answer</strong>: Yes/No</p>
                                <p className='riskDescriptionText'>Question 2</p>
                                <p className='riskDescriptionText'><strong>Answer</strong>: Yes/No</p>
                                <p className='riskDescriptionText'>Question 3</p>
                                <p className='riskDescriptionText'><strong>Answer</strong>: Yes/No</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
        </div>
    )

}

export default RiskFactors