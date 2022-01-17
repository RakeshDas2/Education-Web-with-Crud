import React from 'react'


function EducationTable(props) {
    console.log(props.final);
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
                                <th>Percentage <span><button className='btn btn-primary'>Add</button></span></th>

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
