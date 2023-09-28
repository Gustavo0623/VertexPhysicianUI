import React from "react";
import BackButton from "../components/BackBtn";
import PatientInfo from "../components/PatientInfo";
import RiskFactors from "../components/RiskFactors";

function Patient ({currentUser}) {

    const imageURL = ['../images/home.png', '../images/drink.png', '../images/heart.png', '../images/car.png', '../images/lifeline.png', '../images/sad.png', '../images/shield.png', '../images/pills-bottle.png', ]
    const imageDescriptions = ['Housing Security', 'Food Security', 'Emotional Health', 'Transportation Security', 'Suicide', 'Depression', 'Interpersonal Safety', 'Substance Use']

    // TODO : API Fetch Request Based on URL Parameters ***

    // TODO : Arrange data into array to pass onto PatientInfo Component


    if (!currentUser) {
        // TODO : edit loading screen while waiting for patient information
        return <div>Loading...</div>;
    }

    return (
        <div className='patientPage'> 
            <BackButton/>
            <div id="patientDetailBox">
                <p className='patientDetailsText'>PATIENT DETAILS</p>
                <div className="assessmentIcons">
                    <h1 className='name'>{currentUser.name}</h1>
                    <h2 className="mrn">MRN: {currentUser.MRN}</h2>
                    { currentUser ? <PatientInfo iconDetails={currentUser.riskFactors} imageDetails={[imageURL, imageDescriptions]}/> : null }
                </div>
            </div>
            <div className="buttonBar">
                <button className="dropButton">
                    <span className="arrowBG"></span>
                    <p className="dropText">Psychosocial Assessment</p> 
                </button>
                <button className="dropButton">
                    <span className="arrowBG"></span>
                    <p className="dropText">Trauma-Informed Care Plan</p>
                </button>
            </div>
            <RiskFactors riskFactors={currentUser.riskFactors} imageDetails={[imageURL, imageDescriptions]}/>
        </div>

    )

}

export default Patient