import React, {useState, useEffect} from 'react'
import Icons from '../components/Icons'
import {Outlet, Link} from 'react-router-dom'

function PatientList ({setCurrentUser}) {
// users array (Temporary Placeholder Values)
// for each value in users array, value[0] = username, & value[1] = array containing the details of each user in the order of home, meals, and heart health or heart rate where 0 = good / 1 = okay / 2 = needs improvement
// depending on (Actual) data the values will be adjusted and gathered via fetch request to server.
//let users = userData
const [selectedOption, setSelectedOption] = useState('');

// fetch patient data
const [patientData, setPatientData] = useState(null);

async function fetchData() {
    try {
        const response = await fetch('./patients.json'); // Relative URL
        if (response.ok) {
        const data = await response.json();
        setPatientData(data);
        } else {
        console.error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

useEffect(() => {
    fetchData(); // Fetch data when the component is mounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
};


if (!patientData) {
    // TODO : edit loading screen while waiting for patient information
    return <div>Loading...</div>;
}

return (
    <div id="bodyBracket">
        <h1 id="patientsText">Patients</h1>
        <div id="patientListHeader">
            <div id="result">
                <p id="numResults">{patientData.length} results</p>
            </div>
            <div id='filterBox'>
                <div id='select'>
                    <span id='dropdownArrow'></span>
                    <select id="patientFilterSelect" className={selectedOption === '' ? 'filter' : null} value={selectedOption} onChange={handleOptionChange}>
                        <option value="" disabled hidden>
                        Filter
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <button id="newButton">New</button>
            </div>
        </div>

        <div id='userBox'>
            <div className='titleBox'>

                <div id="nameText">Name</div>
                <div id="MRNText">MRN</div> 
                <div id="riskText">Risks</div>
            </div>
        {/* User container with username and other details */}
        {patientData.map((user, index) => (
            <div className='userDetails' key={index} > 
                
                <Link className='userFlexBlock' onClick={() => {
                    setCurrentUser(user);
                    }} 
                    to={`./${user.MRN}`}
                >
                    <p className='userName'>{user.name}</p>
                    <p className='userMRN'>{user.MRN}</p>
                    <Icons iconDetails={user.riskFactors}/>
                </Link>
            </div>
        ))}
        </div>
        <Outlet/>
    </div>
)
}

export default PatientList