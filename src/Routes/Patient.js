import React from "react";
import BackButton from "../components/BackBtn";
// import { useParams } from "react-router-dom";
import PatientInfo from "../components/PatientInfo";

function Patient ({currentUser}) {
    // const { patientName } =  useParams()

    // TODO : API Fetch Request Based on URL Parameters ***

    // TODO : Arrange data into array to pass onto PatientInfo Component


    if (!currentUser) {
        // TODO : edit loading screen while waiting for patient information
        return <div>Loading...</div>;
    }

    return (
        <div className='patientPage'> 
            <BackButton/>
            <h1 className='name'>{currentUser.name}</h1>
            { currentUser ? <PatientInfo iconDetails={currentUser.riskFactors}/> : null }
        </div>
    )

}

export default Patient