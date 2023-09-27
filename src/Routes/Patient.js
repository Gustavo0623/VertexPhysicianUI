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
            <div id="patientDetailBox">
                <div>PATIENT DETAILS</div>
                <div className="assessmentIcons">
                    <h1 className='name'>{currentUser.name}</h1>
                    <h2 className="mrn">MRN: {currentUser.MRN}</h2>
                    { currentUser ? <PatientInfo iconDetails={currentUser.riskFactors}/> : null }
                </div>
            </div>
            <div class="buttonBar">
                <button class="dropButton"><img href="http://www.w3.org/2000/svg"/></button>
                Psychosocial Assessment
            </div>
            <div  class="buttonBar">
                <button class="dropButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
</svg></button>
                Trauma-Informed Care Plan
            </div>
        <div>Risk Alerts</div>
        <div>6 results</div>
        </div>

    )

}

export default Patient