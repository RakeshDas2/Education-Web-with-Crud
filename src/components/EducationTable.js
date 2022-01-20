import React from 'react'


function EducationTable(props) {

    const change = () => {
        props.setpShow(!props.pshow)
        props.setModify(true)
    }
    const changeDelete = (index) => {

        props.setModify(false)
        const copyFinal = [...props.final]
        copyFinal.splice(index, 1)
        props.setFinal(copyFinal)
    }

    const changeEdit = (index) => {
        props.setIndex(index)
        props.setEshow(!props.eShow)
        props.setModify(false)
        const copyFinal = [...props.final]
        copyFinal.splice(index, 1, props.educational)
        props.setUpdatedData(copyFinal)

    }
    return (
        <div>
            <div className='container'>
                <div className='card '>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Education</th>
                                <th>Course</th>
                                <th>Specialization</th>
                                <th>Institution</th>
                                <th>University</th>
                                <th>Passing Year</th>
                                <th>Percentage </th>
                                <th><span onClick={() => { change() }}><i className="fa fa-plus-circle" aria-hidden="true"></i></span></th>


                            </tr>
                        </thead>
                        <tbody>
                            {props.final.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.education}</td>
                                        <td>{data.course}</td>
                                        <td>{data.specialization}</td>
                                        <td>{data.institution}</td>
                                        <td>{data.university}</td>
                                        <td>{data.passingYear}</td>
                                        <td>{data.percentage}</td>
                                        <td>
                                            <i className="far fa-edit" style={{ margin: '6px' }} onClick={() => { changeEdit(index) }}></i>
                                            <i className="fas fa-trash-alt" onClick={() => { changeDelete(index) }}></i>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EducationTable
