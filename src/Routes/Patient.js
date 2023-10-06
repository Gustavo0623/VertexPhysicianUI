import React, { useState, useEffect } from "react";
import Assessment from "../components/Assessment";
import BackButton from "../components/BackBtn";
import CarePlan from "../components/CarePlan";
import Loading from "../components/Loading";
import PatientInfo from "../components/PatientInfo";
import RiskFactors from "../components/RiskFactors";

function Patient ({currentUser}) {
    // Icon data
    const imageURL = ['../images/drink.png', '../images/home.png', '../images/car.png', '../images/shield.png', '../images/lifeline.png', '../images/sad.png', '../images/heart.png', '../images/pills-bottle.png', ]
    const imageDescriptions = ['Food Security', 'Housing Security', 'Transportation Security', 'Interpersonal Safety', 'Suicide', 'Depression', 'Emotional Health', 'Substance Use']

    // Assessment and Care Plan state variables
    const [assessmentState, setAssessmentState] = useState(false)
    const [carePlanState, setCarePlanState] = useState(false)
    const [resources, setResources] = useState(null)

    // TODO : API Fetch Request for community resources and survey information ***

    async function fetchData() {
        try {
            const url = '../resources.json' // 'http://160.94.179.166:2260/allResources'; // Relative URL
            // const headers = new Headers();
            // headers.append('Content-Type', 'application/json'); // You can add other headers if needed
        
            // const requestOptions = {
            //     method: 'GET',
            //     headers: headers,
            // };
        
            const response = await fetch(url/*, requestOptions*/);
        
            if (response.ok) {
                const data = await response.json();
                setResources(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
      

    useEffect(() => {
        fetchData(); // Fetch data when the component is mounted
        // next line disables error message
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // TODO : Arrange data into array to pass onto PatientInfo Component


    if (!currentUser) {
        // TODO : edit loading screen while waiting for patient information
        return <Loading/>;
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
                <button className="dropButton" onClick={() => {
                    !assessmentState ? 
                        setAssessmentState(true) 
                    :
                        setAssessmentState(false)
                }}>
                    <span className="arrowBG"></span>
                    <p className="dropText">Psychosocial Assessment</p> 
                </button>
                {assessmentState ? <Assessment currentUser={currentUser}/> : null}
                <button className="dropButton" onClick={() => {
                    !carePlanState ? 
                        setCarePlanState(true)
                    :
                        setCarePlanState(false)
                }}>
                    <span className="arrowBG"></span>
                    <p className="dropText">Trauma-Informed Care Plan</p>
                </button>
                {carePlanState ? <CarePlan riskFactors={currentUser.riskFactors} resources={resources}/> : null}
            </div>
            <RiskFactors riskFactors={currentUser.riskFactors} imageDetails={[imageURL, imageDescriptions]}/>
        </div>

    )

}

export default Patient