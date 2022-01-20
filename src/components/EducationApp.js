import React, { useState } from 'react'
import AddEducation from './AddEducation'
import EditEducation from './EditEducation'
import EducationTable from './EducationTable'
import {Modal} from 'react-bootstrap'

function EducationApp() {
    const [storeIndex,setIndex]=useState(0)
    const [pshow, setpShow] = useState(false)
    const [modify,setModify]=useState(true)
    const[eShow,setEshow]=useState(false)
    const [final, setFinal] = useState([])
    const [educational, setEducational] = useState(
        {
            education: '',
            course: '',
            specialization: '',
            institution: '',
            university: '',
            passingYear: '',
            percentage: ''
        }
    )
    return (
        <div>
            <EducationTable educational={educational} setEducational={setEducational} setFinal={setFinal} final={final} pshow={pshow} setpShow={setpShow} setEshow={setEshow} eShow={eShow} modify={modify} setModify={setModify}  setIndex={setIndex}/>
           <Modal show={pshow}>
           <AddEducation pshow={pshow} setpShow={setpShow} setEshow={setEshow} eShow={eShow}/>
           </Modal>
            <Modal show={eShow}>
            <EditEducation educational={educational} setEducational={setEducational} setFinal={setFinal} final={final} setEshow={setEshow} eShow={eShow} modify={modify} setModify={setModify}  storeIndex={storeIndex}/>
            </Modal>
        </div>
    )
}

export default EducationApp
