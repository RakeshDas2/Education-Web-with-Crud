import React, { useState } from 'react'
import AddEducation from './AddEducation'
import EditEducation from './EditEducation'
import EducationTable from './EducationTable'

function EducationApp() {
    const [final,setFinal]=useState([])
    const [educational,setEducational]=useState(
        {
            education:'',
            course:'',
            specialization:'',
            institution:'',
            university:'',
            passingYear:'',
            percentage:''
        }
      )
    return (
        <div>
            <EducationTable educational={educational} setEducational={setEducational} setFinal={setFinal} final={final}/>
            <AddEducation/>
            {/* <EditEducation educational={educational} setEducational={setEducational} setFinal={setFinal} final={final}/> */}
        </div>
    )
}

export default EducationApp
