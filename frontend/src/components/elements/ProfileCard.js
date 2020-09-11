import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const editBtnStyle = {
    margin: '0',
    position: 'absolute',
    top: '20px',
    right: '50px'
  }

function ProfileCard(props) {
    const [editStatus, setEditStatus] = useState(false)
    return (
        <div className="card" style={{background: '#fff', color: 'black'}}>
            <div className="row d-flex justify-content-center align-items-center"> 
                <div className="col-md-3 d-flex justify-content-center align-items-center" style={{margin: '20px 0'}}>
                    <Avatar alt="Cindy Baker" style={{height: '120px', width: '120px'}}/>
                </div>
                <div className="col-md-9 d-flex align-items-start flex-column" style={{textAlign: 'start', margin:' 20px 0', padding: '10px'}}>
                    <div style={{width:'80%', padding:'10px'}}>
                        <h4>
                            <span>Name:</span>
                            <br />
                            {/* {editStatus ? <input type="text" className="form-control" style={{width: '100%', margin: 0, fontSize:'20px'}} value={props.user.username}/> : <>{props.user.username}</>} */}
                        </h4>
                    </div>
                    <div style={{width:'80%', padding:'10px'}}>
                        <h4>
                            <span>Email</span>
                            <br />
                            {props.user.email}
                        </h4>
                    </div>
                    
                    <button className="btn btn-outline-info edit-user-btn" style={editBtnStyle} onClick={() => setEditStatus(!editStatus)}>
                        {editStatus ? "Cancel" : "Edit"}
                    </button>
                    {editStatus ? <Adult value={props.user.isAdult}/>: null}
                    {editStatus ? <ConfirmPassword />: null}
                </div>
            </div>
        </div>
    )
}


function Adult(props) {
    return (
        <div style={{width: '80%', padding: '10px'}}>
            <h4>
                Are you an adult? : &nbsp;
                <BootstrapSwitchButton
                    checked={props.value}
                    onlabel='Y'
                    onstyle='dark'
                    offlabel='N'
                    offstyle='warning'
                />
            </h4>

        </div>
    )
}

function ConfirmPassword() {
    return (
        <div style={{width: '80%', padding: '10px'}}>
            <h4>
                  <label for="">Confirm Password*</label>
                  <input type="password" className="form-control" name="" id="" placeholder="" required/>
            </h4>

        </div>
    )
}



export default ProfileCard
