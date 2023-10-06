import React from "react";

// Assessment details Component
function Assessment ({currentUser}) {

    const questionnaireResponses = currentUser.questionnaireResponses
    const keys = Object.keys(questionnaireResponses)
    const values = Object.values(questionnaireResponses)
    const question = keys.slice(2)
    const response = values.slice(2)
    // Set variable to hold the patient assessment data

    return (
        <div className='assessment'>
            {question.map((question, index)=>(
                <div key={index}>
                    <p className='question'>{question}</p>
                    <p className='response'>{response[index]}</p>
                </div>
            ))}
        </div>
    )
}

export default Assessment