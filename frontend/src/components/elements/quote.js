import React from 'react'

const Quote = props => {
    const QuoteStyle = {
        background: `${props.background || 'white'}`,
        color: `${props.color || 'black' }`
    }
    return (
        <div className='col-md-4 col-sm-12'>
            <div className="card quote"  style={QuoteStyle}>
                <div className="card-body">
                    <h4 className="card-title">{props.quote}</h4>
                    <div className='card-author'>
                        <p className="card-text">~{props.author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;