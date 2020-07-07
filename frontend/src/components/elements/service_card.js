import React from 'react'

export const ServiceCard = props => {
    return (
        <div className='col-md-4 col-sm-12'>
            <div className="card text-left">
                <img className="card-img-top" src={props.src} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.body}</p>
                </div>
            </div>
        </div>
    )
}
