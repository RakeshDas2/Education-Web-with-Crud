import React, { useState } from 'react'

function EditEducation(props) {


    const changeEdit = () => {
        props.setEshow(!props.eShow)
        props.setModify(true)
    }


    const [isCourseEmpty, setIsCourseEmpty] = useState(true)
    const [isSpecializationEmpty, setIsSpecializationEmpty] = useState(true)
    const [isInstitutionEmpty, setIsInstitutionEmpty] = useState(true)
    const [isUniversityEmpty, setIsUniversityEmpty] = useState(true)
    const [isPassingYearEmpty, setIsPassingYearEmpty] = useState(true)
    const [isPercentageEmpty, setIsPercetageEmpty] = useState(true)
    // const [showError,setShowError]=useState('')
    const [showCourseError, setCourseError] = useState('');
    const [showSpeError, setSpeError] = useState('');
    const [showInstError, setInstError] = useState('');
    const [showUniError, setUniError] = useState('');
    const [showPassError, setPassError] = useState('');
    const [showPerError, setPerError] = useState('');



    const handelChange = (event) => {
        const educationalCopy = { ...props.educational }
        educationalCopy[event.target.name] = event.target.value
        props.setEducational(educationalCopy)
    }

    const validateCorse = (course) => {
        if (course) {
            setCourseError('')
            setIsCourseEmpty(false)
            return true

        } else {
            setCourseError("Can not be empty")
            setIsCourseEmpty(true)
            return false
        }
    }
    const validateSpecialization = (specialization) => {
        if (specialization) {
            setSpeError('')
            setIsSpecializationEmpty(false)
            return true

        } else {
            setSpeError("Can not be empty")
            setIsSpecializationEmpty(true)
            return false
        }
    }
    const validateInstitution = (institution) => {
        if (institution) {
            setInstError('')
            setIsInstitutionEmpty(false)
            return true

        } else {
            setInstError("Can not be empty")
            setIsInstitutionEmpty(true)
            return false
        }
    }
    const validateUniversity = (university) => {
        if (university) {
            setUniError('')
            setIsUniversityEmpty(false)
            return true

        } else {
            setUniError("Can not be empty")
            setIsUniversityEmpty(true)
            return false
        }
    }
    const validatePassingYear = (passingYear) => {
        if (passingYear) {
            if (passingYear < 2022 && passingYear >= 2010) {
                setPassError('')
                setIsPassingYearEmpty(false)
                return true
            } else {
                setPassError("Passing year in between 2010 and 2021")
                setIsPassingYearEmpty(true)
                return false
            }
        } else {
            setPassError("Can not be empty")
            setIsPassingYearEmpty(true)
            return false
        }
    }
    const validatePercentage = (percentage) => {
        if (percentage) {
         if(percentage<100 && percentage>=40){
            setPerError('')
            setIsPercetageEmpty(false)
            return true
         }else{
            setPerError("percentage must be greater than 40 and less than 100")
            setIsPercetageEmpty(true)
            return false
         }

        } else {
            setPerError("Can not be empty")
            setIsPercetageEmpty(true)
            return false
        }
    }

    const validate = () => {
        const validCourse = validateCorse(props.educational.course)
        const validSpecialization = validateSpecialization(props.educational.specialization)
        const validInstitution = validateInstitution(props.educational.institution)
        const validUniversity = validateUniversity(props.educational.university)
        const validPassingYear = validatePassingYear(props.educational.passingYear)
        const validPercentage = validatePercentage(props.educational.percentage)

        if (validCourse && validSpecialization && validInstitution && validInstitution && validUniversity && validPassingYear && validPercentage) {

            const finalCopy = [...props.final]
            if (props.modify === true) {
                finalCopy.push(props.educational)
                props.setFinal(finalCopy)
            }
            else {

                finalCopy[props.storeIndex] = props.educational;
                props.setFinal(finalCopy)
            }

        } else {
            alert('not valid')
        }
    }
    return (
        <div>
            <div className='card ' style={{ width: '530px' }}>
                <div className='container'>
                    <div className='row'>
                        <h3 style={{ color: 'blue', margin: '20px', marginLeft: '160px' }}>Educational</h3>
                        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '-50px' }}>
                            <i className="fas fa-times" onClick={() => { changeEdit() }}></i>
                        </div>
                    </div>


                    <div style={{ display: 'flex' }}>
                        <p style={{ fontSize: '12px', margin: '0px' }}>Select your qualification</p>
                    </div>
                    <select className="form-select" aria-label="Default select example" style={{ borderRadius: '10px' }} name='education' onChange={(event) => { handelChange(event) }}>
                        <option value='0'>Select your Qualification</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Under Graduate">Under Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                    </select>
                    <br />
                    <div className='row'>
                        <div className='col-6' >
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: '12px', margin: '0px' }}>Course</p>
                            </div>
                            <input className='form-control' placeholder='Course' name='course' value={props.educational.course} style={{ borderRadius: '10px' }} onChange={(event) => { handelChange(event) }} />{isCourseEmpty ? <div style={{ display: 'flex' }}><span style={{ color: 'red', fontSize: '11px' }}>{showCourseError}</span></div> : null}
                        </div>
                        <div className='col-6'>
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: '12px', margin: '0px' }}>Specialization</p>
                            </div>
                            <input className='form-control' placeholder='Specialization' style={{ borderRadius: '10px' }} name='specialization' value={props.educational.specialization} onChange={(event) => { handelChange(event) }} />{isSpecializationEmpty ? <div style={{ display: 'flex' }}><span style={{ color: 'red', fontSize: '11px' }}>{showSpeError}</span></div> : null}
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-6' >
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: '12px', margin: '0px' }}>Institue Name</p>
                            </div>
                            <input className='form-control' placeholder='Institue Name' style={{ borderRadius: '10px' }} name='institution' value={props.educational.institution} onChange={(event) => { handelChange(event) }} />{isInstitutionEmpty ? <div style={{ display: 'flex' }}><span style={{ color: 'red', fontSize: '11px' }}>{showInstError}</span></div> : null}
                        </div>
                        <div className='col-6'>
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: '12px', margin: '0px' }}>University Name</p>
                            </div>
                            <input className='form-control' placeholder='University Name' style={{ borderRadius: '10px' }} name='university' value={props.educational.university} onChange={(event) => { handelChange(event) }} />{isUniversityEmpty ? <div style={{ display: 'flex' }}><span style={{ color: 'red', fontSize: '11px' }}>{showUniError}</span></div> : null}
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-6' >
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: '12px', margin: '0px' }}>Passing Year</p>
                            </div>
                            <input className='form-control' placeholder='Passing Year' style={{ borderRadius: '10px' }} type='number' name='passingYear' value={props.educational.passingYear} onChange={(event) => { handelChange(event) }} />{isPassingYearEmpty ? <div style={{ display: 'flex' }}><span style={{ color: 'red', fontSize: '11px' }}>{showPassError}</span></div> : null}
                        </div>
                        <div className='col-6'>
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: '12px', margin: '0px' }}>Percentage</p>
                            </div>
                            <input className='form-control' placeholder='Percentage' style={{ borderRadius: '10px' }} type='number' name='percentage' value={props.educational.percentage} onChange={(event) => { handelChange(event) }} />{isPercentageEmpty ? <div style={{ display: 'flex' }}><span style={{ color: 'red', fontSize: '11px' }}>{showPerError}</span></div> : null}
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'end' }} >
                        <button className='btn btn-primary' onClick={() => { validate() }} style={{ width: '100px', borderRadius: '20px' }}>Add</button>
                    </div>
                    <br />
                </div>
            </div>
        </div>


    )
}

export default EditEducation
