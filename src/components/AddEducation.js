import React from 'react'

function AddEducation() {
    return (
        <div>
            <div className='container m-2'>
                <div className='row'>
                    <div className='col-md-5 offset-4'>
                        <div className='card border-2 bg-light' style={{ borderRadius: '30px' }}>
                            <br />
                            <h3 style={{ color: 'blue' }}>Educational</h3>
                            <br />

                            <div className='container'>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontSize: '12px', margin: '0px' }}>Select your qualification</p>
                                </div>
                                <select className="form-select" aria-label="Default select example">
                                    <option >Select your Qualification</option>
                                    <option value="1">10th</option>
                                    <option value="2">12th</option>
                                    <option value="3">Under Graduate</option>
                                    <option value="3">Post Graduate</option>
                                </select>
                                <br />
                                <br />
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'end' }} >
                                    <button className='btn btn-primary' style={{ width: '100px', borderRadius: '20px' }}>Add</button>
                                </div>
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddEducation
