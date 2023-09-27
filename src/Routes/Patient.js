import React from "react";
// import { useParams } from "react-router-dom";
import PatientInfo from "../components/PatientInfo";

function Patient ({currentUser}) {
    // const { patientName } =  useParams()

    console.log(currentUser)

    // TODO : API Fetch Request Based on URL Parameters ***

    // TODO : Arrange data into array to pass onto PatientInfo Component


    if (!currentUser) {
        // TODO : edit loading screen while waiting for patient information
        return <div>Loading...</div>;
    }

    return (
        <div className='patientPage'> 
            <h1>{currentUser[0]}</h1>
            { currentUser ? <PatientInfo iconDetails={currentUser[1]}/> : null }
        </div>
    )

}

export default Patient