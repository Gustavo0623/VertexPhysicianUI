import React from "react";

// Assessment details Component
function Assessment ({currentUser}) {
    
    // Set variable to hold the patient assessment data
    const questionnaireResponses = currentUser.questionnaireResponses
    // const keys = Object.keys(questionnaireResponses)
    const values = Object.values(questionnaireResponses)
    const question = [
        '1. Do you have food for tonight?',
        '2. Within the past 12 months, did you worry that your food would run out before you got money to buy more?', 
        '3. Within the past 12 months, did the food you bought just not last and you didn\'t have money to get more?', 
        '4. Do you have somewhere safe to sleep tonight?', 
        '5. Do you have housing?', 
        '6. Are you worried about losing your housing?', 
        '7. Within the past 12 months, have you or your family members you live with been unable to get utilities (heat, electricity) when it was really needed?', 
        '8. Are your currently able to access reliable transportation to receive needed care (e.g. transportation to medical appointments, pharmacies for medications, other needed services)?', 
        '9. Within the past 12 months, has lack of transportation kept you from medical appointments, getting your medicines, non-medical meetings or appointments, work, or from getting things that you need?', 
        '10. Do you feel physically and emotionally safe where you currently live', 
        '11. Within the past 12 months, have you been hit, slapped, kicked or otherwise physically hurt by someone?', 
        '12. Within the past 12 months, have you been humiliated or emotionally abused in other ways by your partner or ex-partner?', 
        '13. Are you having thoughts of killing yourself right now?', 
        '14. In the past few weeks, have you wished you were dead?', 
        '15. In the past few weeks, have you felt that you or your family would be better off if you were dead?', 
        '16. In the past week, have you been having thoughts about killing yourself?', 
        '17. Have you ever tried to kill yourself?', 
        '18. Little interest or pleasure in doing things?', 
        '19. Feeling down, depressed, or hopeless?', 
        '20. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?', 
        '21. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? (One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits)', 
        '22. How many times in the past 12 months have you used prescription drugs for non-medical reasons?', 
        '23. How many times in the past 12 months have you used illegal drugs?', 
        '24. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?'
    ]
    const response = values.slice(2)

    return (
        <div className='assessment'>
            {question.map((question, index)=>(
                <div className='questionBox' key={index}>
                    <p className='question'>{question}</p>
                    <p className='response'><b>Response:</b> {response[index]}</p>
                </div>
            ))}
        </div>
    )
}

export default Assessment