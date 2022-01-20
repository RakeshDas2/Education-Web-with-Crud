import React from 'react'

function AddEducation(props) {
const change=()=>{
    props.setpShow(!props.pshow)
}
const changeEdit=()=>{
    props.setpShow(!props.pshow)
    props.setEshow(!props.eShow)
}
    return (
        <div>

            <div className='card' >
                <br />
                <h3 style={{ color: 'blue', marginLeft: '170px' }}>Educational</h3>
                <div style={{ display: 'flex', justifyContent:'end', position:'absolute' } }>
                    <span style={{marginLeft:'450px',marginTop:'20px', position:'relative'}} onClick={()=>{change()}}><i className="fas fa-times"></i></span>
                </div>
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
                    <button className='btn btn-primary' onClick={()=>{changeEdit()}} style={{ width: '100px', borderRadius: '20px' }}>Add</button>
                </div>
                <br />

            </div>
        </div>
        </div >



    )
}

export default AddEducation
